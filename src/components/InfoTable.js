import React, { useState, useContext, useRef, useEffect } from 'react';
import { StoreContext } from 'contexts/StoreContext';
import css from './Home.module.css';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function InfoTable(props) {
    let {
        editNote, completeService, editRow, removeRow, headers, authenticated
    } = useContext(StoreContext);
    const ref = useRef();
    const [images, setImages] = useState({});
    const [imageURLs, setImageURLs] = useState(() => {
        const savedImageURLs = window.localStorage.getItem('imageURLs');
        return savedImageURLs ? JSON.parse(savedImageURLs) : {};
    });
    const [imageUploaded, setImageUploaded] = useState(Array(props.data.length).fill(false));
    const [newNote, setNewNote] = useState({ row: '', note: '' });
    const [toggleNewNote, setToggleNewNote] = useState({state: false, row: ''});
    const [toggleEdit, setToggleEdit] = useState({ list: Array(props.data.length).fill(false) });
    const [modRow, setModRow] = useState({ arr: [{ index: '', name: '', location: '', size: '', quantity: '', ldos: '', ndos: '', notes: '' }] });
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    useEffect(() => {
        async function resetState() {
            setToggleEdit({ list: Array(props.data.length).fill(false) });
            setModRow({ arr: [{ index: '', date: '' }] });
        }
        resetState()
    }, [props.data, props.buildingId]);

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If notes are open and theres a click outside, close the note
            if (toggleNewNote && ref.current && !ref.current.contains(e.target)) {
                saveNoteAndClose();
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [toggleNewNote, newNote, props, editNote]);

    useEffect(() => {
        // Load images from local storage
        const savedImages = JSON.parse(window.localStorage.getItem('images'));
        const savedImageURLs = JSON.parse(window.localStorage.getItem('imageURLs'));
        const savedImageUploaded = JSON.parse(window.localStorage.getItem('imageUploaded'));
        if (savedImages) setImages(savedImages);
        if (savedImageURLs) setImageURLs(savedImageURLs);
        if (savedImageUploaded) setImageUploaded(savedImageUploaded);
    }, []);

    useEffect(() => {
        // Save images to local storage when changed
        window.localStorage.setItem('images', JSON.stringify(images));
        window.localStorage.setItem('imageURLs', JSON.stringify(imageURLs));
        window.localStorage.setItem('imageUploaded', JSON.stringify(imageUploaded));
    }, [images, imageURLs, imageUploaded]);

    useEffect(() => {
        const savedToggleNewNote = window.localStorage.getItem('toggleNewNote');
        if (savedToggleNewNote !== null) {
            setToggleNewNote (JSON.parse (savedToggleNewNote));
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem('toggleNewNote', JSON.stringify(toggleNewNote));
    }, [toggleNewNote]);

    function saveNoteAndClose() {
        editNote(props.buildingId, newNote);
        setToggleNewNote({ state: false, row: '' });
        setNewNote({ row: '', note: '' });
    }

    function getItem(row, name) {
        let obj = modRow.arr.find(elem => elem.index === row);
        if (obj !== undefined) {
            return obj[name];
        }
        return null;
    }
    //handler for modifying row values
    function handleEditRow(row, task) {
        /* if j===row and item === true, aquire date from form, edit in store context */
        let obj = modRow.arr.find(elem => elem.index === row);
        if (toggleEdit.list[row] === true && obj !== undefined) {
            //values = obj
            editRow(props.buildingId, obj, task);
            setModRow({
                ...modRow,
                arr: modRow.arr.filter(elem => !(elem.index === row)),
            })
        }
        setToggleEdit({
            ...toggleEdit,
            list: toggleEdit.list.map((item, j) => {
                if (j === row) {
                    return !item;
                }
                else {
                    return item;
                }
            })
        });
    }

    //helper for handleEditRow
    function handleEditChange(e, index) {
        var value = e.target.value;
        var name = e.target.name;
        if (e.target.type === 'date') {
            value += "T00:00:00";
        }
        let obj = modRow.arr.find(elem => elem.index === index);
        if (obj !== undefined) {
            setModRow({
                ...modRow,
                arr: modRow.arr.map(
                    row => row.index === index ? {
                        ...row,
                        [name]: value,
                    } : row
                )
            })
        }
        else {
            const newvals = {};
            const keyset = Object.keys(props.data[index]);
            const rowdata = props.data[index]
            keyset.map(
                item => newvals[item] = rowdata[item]
            )
            newvals[name] = value;
            newvals.index = index;
            setModRow({
                ...modRow,
                arr: modRow.arr.concat(newvals)
            })
        }
    }

    function deleteRow(index, name) {
        return (
            confirmAlert({
                title: 'Confirm to delete row',
                message: 'Are you sure you want to delete this row',
                buttons: [
                    {
                        label: 'Yes',
                        onClick: (e) => handleTrash(e, props.buildingId, name, index)
                    },
                    {
                        label: 'No',
                        //onClick: () => alert('Click No')
                    }
                ]
            }))
    };

    //handler for deleting row
    function handleTrash(e, building, row, index) {
        removeRow(building, row)
        setToggleEdit({
            ...toggleEdit,
            list: toggleEdit.list.filter((item, i) => (i !== index))
        });
    }

    //aquire date value from state
    function getDate(row) {
        let obj = modRow.arr.find(elem => elem.index === row);
        if (obj !== undefined) {
            return obj.date
        }
        return null;
    }
    //helper for building date objects
    function buildDate(date) {
        const temp_day = new Date(date);
        const day = monthNames[temp_day.getMonth()] + " " + temp_day.getDate() + ", " + temp_day.getFullYear();
        return (<td className={css.dateTbl}>{day}</td>);
    }
    function getToday(nd) {
        const today = new Date();
        const ndos = new Date(nd);
        var result = (today - ndos) / 86400000;
        return result;
    }
    //handler for finishing service
    function handleCheckbox(e, building, index) {
        completeService(building, index);
    }

    //Updates note in context, handles as text is entered
    function handleNoteChange(e, name) {
        setNewNote({ row: name, note: e.target.value });
    }

    //Saves note and closes the note edit
    function handleNoteSubmit(e) {
        saveNoteAndClose();
        e.preventDefault();
    }

    //State change of toggleNewNote
    function handleNoteToggle(row, notes) {
        setToggleNewNote({ state: true, row: row});
        setNewNote({ row: row, note: notes });
    }

    //Handler for image file
    function handleFileChange(e, index) {
        const files = [...e.target.files];
        const newImageURLs = files.map(file => URL.createObjectURL(file));
        newImageURLs[index] = files.map(file => URL.createObjectURL(file));
        setImageURLs(newImageURLs);

        const newImageUploaded = [...imageUploaded];
        newImageUploaded[index] = true;
        setImageUploaded(newImageUploaded);
    };

    //handle image deletion
    function handleImageDelete(rowIndex, imageIndex) {
        const newImageURLs = [...imageURLs];
        newImageURLs[rowIndex].splice(imageIndex, 1);
        setImageURLs(newImageURLs);

        if (newImageURLs[rowIndex].length === 0) {
            const newImageUploaded = [...imageUploaded];
            newImageUploaded[rowIndex] = false;
            setImageUploaded(newImageUploaded);
        }
    };

    return (
        <div className={css.maintable}>
            <Table striped bordered>
                <thead>
                    <tr>
                        {headers.map((header) => <th style={{ width: "10%" }} key={header}>{header}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                {toggleEdit.list[i] ? (<td  ><form className={css.infoEdit}>
                                    <input type="text" name="name" placeholder="Name…"
                                        value={getItem(i, item.name) !== null ? getItem(i, item.name) : item.name} onChange={(e) => handleEditChange(e, i)} />
                                </form></td>)
                                    : <td  >{item.name}</td>}
                                {toggleEdit.list[i] ? (<td  ><form className={css.infoEdit}>
                                    <input type="text" name="location" placeholder="Location..."
                                        value={getItem(i, item.location) !== null ? getItem(i, item.location) : item.location} onChange={(e) => handleEditChange(e, i)} />
                                </form></td>)
                                    : <td  >{item.location}</td>}
                                {toggleEdit.list[i] ? (<td  ><form className={css.infoEdit}>
                                    <input type="text" name="size" placeholder="Size..."
                                        value={getItem(i, item.size) !== null ? getItem(i, item.size) : item.size} onChange={(e) => handleEditChange(e, i)} />
                                </form></td>)
                                    : <td  >{item.size}</td>}
                                {toggleEdit.list[i] ? (<td  ><form className={css.infoEdit}>
                                    <input type="text" name="quantity" placeholder="Quantity..."
                                        value={getItem(i, item.quantity) !== null ? getItem(i, item.quantity) : item.quantity} onChange={(e) => handleEditChange(e, i)} />
                                </form></td>)
                                    : <td  >{item.quantity}</td>}
                                {toggleEdit.list[i] ? (<td className={css.dateTbl}><form className={css.dateEdit}>
                                    <input type="date" name="ldos" placeholder="Last NDOS"
                                        value={getDate(i) !== null ? getDate(i) : item.ldos.substring(0, 10)}
                                        onChange={(e) => handleEditChange(e, i)} />
                                </form></td>)
                                    : buildDate(item.ldos)}
                                {toggleEdit.list[i] ? (<td className={css.dateTbl}><form className={css.dateEdit}>
                                    <input type="date" name="ndos" placeholder="New NDOS"
                                        value={getDate(i) !== null ? getDate(i) : item.ndos.substring(0, 10)}
                                        onChange={(e) => handleEditChange(e, i)} />
                                </form></td>)
                                    : buildDate(item.ndos)}
                                {(toggleNewNote.state && toggleNewNote.row === item.name) ?
                                    <td ref={ref}>
                                        <form onSubmit={handleNoteSubmit}>                                                
                                            <input type="file" name="media" placeholder="img" accept="image/*" multiple onChange={e => handleFileChange(e, i)} />
                                                {imageURLs[i] && imageURLs[i].map((imageSrc, index) => (
                                                    <div key={index} style={{position: "relative", display: "inline-block"}}>
                                                    <img key={index} src={imageSrc} alt="Selected" style={{maxWidth: "200px", maxHeight: "200px"}} />
                                                
                                                <Button
                                                    style= {{position: 'absolute', top:'5px', right: '5px', background: 'red', color: 'white', border: 'none', borderRadius: '50%'}}
                                                    onClick = {() => handleImageDelete(i, index)}
                                                >
                                                &times;
                                                </Button>

                                            </div>
                                                ))}
                                            <input type="text" name="note" placeholder="New Note..." value={(newNote.note === '') ? '' : newNote.note} onChange={(e) => handleNoteChange(e, item.name)} />
                                        </form>
                                    </td>                                    
                                    : <td style={(item.notes !== '') ? { backgroundColor: "yellow" } : { backgroundColor: "none" }}><Button style={{ outline: "none", boxShadow: "none" }} variant="outline-dark" onClick={() => handleNoteToggle(item.name, item.notes, item.image)}><i className={"bi bi-sticky"}></i></Button></td>
                                }
                                <td className={imageUploaded[i] ? css.icon: ''}>{item.name} </td>
                                <td style={getToday(item.ndos) > 0 ? { backgroundColor: "red" } : (getToday(item.ndos) > -10 ? { backgroundColor: "#e5fc14" } : { backgroundColor: "#00cd2b" })}>
                                    {authenticated ?
                                        <ButtonGroup>
                                            <Button style={{ outline: "none", boxShadow: "none" }} variant="outline-light" onClick={(e) => handleCheckbox(e, props.buildingId, item.name)}>
                                                <i className={"bi bi-check2"}></i>
                                            </Button>
                                            {''}
                                            <Button style={{ outline: "none", boxShadow: "none" }} variant={toggleEdit.list[i] ? "warning" : "outline-light"} onClick={() => handleEditRow(i, item.name)}>
                                                <i className={"bi bi-pencil-fill"}></i>
                                            </Button>
                                            {''}
                                            <Button style={{ outline: "none", boxShadow: "none" }} variant="outline-light" onClick={() => deleteRow(i, item.name)}>
                                                <i className={"bi bi-trash3"}></i>
                                            </Button>
                                        </ButtonGroup> :
                                        <ButtonGroup>
                                            <Button style={{ outline: "none", boxShadow: "none" }} variant="outline-light" onClick={(e) => handleCheckbox(e, props.buildingId, item.name)}>
                                                <i className={"bi bi-check2"}></i>
                                            </Button>
                                        </ButtonGroup>
                                    }
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default InfoTable;
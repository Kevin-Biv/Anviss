import React, { useContext, useState, useEffect, useRef } from 'react';
import { StoreContext } from 'contexts/StoreContext';
import Table from './InfoTable';
import css from './Home.module.css';
import publicUrl from 'utils/publicUrl.js';
import { Link, useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Container from 'react-bootstrap/Container';

//required fields for forms
//https://react-bootstrap.github.io/forms/validation/

//sticky row header (again)

//enter key to save edits
//???? https://stackoverflow.com/questions/31272207/to-call-onchange-event-after-pressing-enter-key

//help page

function Home(props) {
    let {
        reminders, buildings, addRow, addBuilding, addReminder, removeReminder, authenticated, removeBuilding
    } = useContext(StoreContext);
    let { buildingId } = useParams();
    let navigate = useNavigate();
    const building_names = [];
    const reminderRef = useRef();
    const imgRef = useRef();
    const buildingRef = useRef();
    const rowRef = useRef();
    for (const building of buildings) {
        building_names.push(building.name)
    }
    let data = buildings.find(b => b.name === buildingId);
    if (data === undefined) {
        data = buildings[0];
        buildingId = data.name;
        let url = window.location.origin + "/#/" + buildingId
        window.location.href = url;

    }
    data = data.data;
    data = data.sort((a, b) => (a.name > b.name) ? 1 : -1);    //presents tasks in sorted order
    const [toggleAddRow, setToggleAddRow] = useState(false);
    const [toggleNewBuilding, setToggleNewBuilding] = useState(false);
    const [newRow, setNewRow] = useState({ name: '', location: '', size: '', quantity: '', ldos: '', ndos: '', notes: '' });
    const [newBuilding, setNewBuilding] = useState('');
    const [toggleReminders, setToggleReminders] = useState(false);
    const [toggleNewReminder, setToggleNewReminder] = useState(false);
    const [newReminder, setNewReminder] = useState({ name: '', media: '' });

    useEffect(() => {
        async function resetState(building) {
            setToggleAddRow(false);
            setNewRow({ name: '', location: '', size: '', quantity: '', ldos: '', ndos: '', notes: '' });
        }
        resetState(buildingId)
    }, [buildings, buildingId]);

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If notes are open and theres a click outside, close the note
            if (toggleNewReminder && reminderRef.buildingId && !reminderRef.buildingId.contains(e.target)) {
                setToggleNewReminder(false);
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [toggleNewReminder]);

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If notes are open and theres a click outside, close the note
            if (toggleNewBuilding && buildingRef.buildingId && !buildingRef.buildingId.contains(e.target)) {
                setToggleNewBuilding(false);
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [toggleNewBuilding]);

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If notes are open and theres a click outside, close the note
            if (toggleAddRow && rowRef.buildingId && !rowRef.buildingId.contains(e.target)) {
                setToggleAddRow(false);
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [toggleAddRow]);

    //helper for handleAddRow
    function handleNRChange(e) {
        const value = e.target.value;
        setNewRow({
            ...newRow,
            [e.target.name]: value
        });
    }

    //handler for adding rows
    function handleAddRow(event) {
        addRow(buildingId, newRow.name, newRow.size, newRow.quantity, newRow.ldos, newRow.ndos, newRow.location, newRow.notes);
        setNewRow({ name: '', location: '', size: '', quantity: '', ldos: '', ndos: '', notes: '' })
        setToggleAddRow(false);
        event.preventDefault();
    }

    //helper for handleAddBuilding
    function handleBuildChange(e) {
        const value = e.target.value;
        setNewBuilding(value);
    }
    function handleAddBuilding(event) {
        addBuilding(newBuilding);
        event.preventDefault();
    }

    //Functionality for deleting buildings
    function handleDeleteBuilding() {
        removeBuilding(buildingId);
        navigate("/");
    }

    //Functionality for Adding Reminders
    function handleReminderChange(e) {
        const value = e.target.value;
        if (e.target.name === "media") {
            var file = e.target.files[0]
            let reader = new FileReader();
            reader.onloadend = (e) => {
                setNewReminder({
                    ...newReminder,
                    media: e.target.result
                })
            };
            reader.readAsDataURL(file);
        }
        else {
            setNewReminder({
                ...newReminder,
                name: value
            });
        }
    }
    function handleAddReminder(event) {
        addReminder(newReminder.name, newReminder.media);
        setNewReminder({ name: '', media: '' })
        setToggleNewReminder(false);
        event.preventDefault();
    }
    function deleteReminder(name) {
        removeReminder(name);
    }

    return (
        <Container fluid style={{ marginTop: "100px", paddingLeft: 0, paddingRight: 0 }}>
            <div className={css.sidebarContainer}>
                <div>
                    <Button variant="outline-light" style={{ color: "black", width: "200px", outline: "none", boxShadow: "none" }} onClick={(e) => setToggleReminders(!toggleReminders)}>{"Reminders: " + reminders.length}</Button>
                    {toggleReminders && <ListGroup variant="flush" horizontal={false}>
                        {reminders.map((reminder, i) => {
                            return (
                                <ListGroup.Item key={i}>
                                    <p>{reminder.name}</p>
                                    <Button size="sm" style={{ outline: "none", boxShadow: "none", marginRight: "5px" }} variant="outline-success" onClick={() => deleteReminder(reminder.name)}><i className={"bi bi-check2"}></i></Button>
                                    <OverlayTrigger
                                        trigger="click"
                                        placement="right"
                                        key={i}
                                        overlay={
                                            ({ placement, arrowProps, show: _show, popper, ...props }) => (
                                                <div
                                                    {...props}
                                                    style={{
                                                        position: 'absolute',
                                                        backgroundColor: "black",
                                                        borderColor: "inherit",
                                                        padding: '2px 10px',
                                                        offset: '5px',
                                                        color: 'white',
                                                        zIndex: 1,
                                                        borderRadius: 3,
                                                        ...props.style,
                                                    }}
                                                >
                                                    <img alt="None found" width="250px" src={reminder.media}></img>
                                                </div>
                                            )
                                        }
                                    >
                                        <Button ref={imgRef} size="sm" style={{ outline: "none", boxShadow: "none", marginRight: "2px" }} variant="outline-secondary"><i className={"bi bi-image"}></i></Button>
                                    </OverlayTrigger>
                                </ListGroup.Item>
                            )
                        })}
                        <ListGroup.Item ref={reminderRef}>
                            {toggleNewReminder ?
                                (<form className={css.add} onSubmit={handleAddReminder}>
                                    <input type="text" name="name" placeholder="..." value={newReminder.name} onChange={handleReminderChange} />
                                     <input type="file" name="media" placeholder="Img" accept="image/*" onChange={handleReminderChange} />
                                     <Button style={{ margin: "2%", outline: "none", boxShadow: "none" }} variant="secondary" type="submit"><i className={"bi bi-plus-lg"}></i></Button>
                                </form>)
                                : <Button size="sm" variant="outline-secondary" style={{ outline: "none", boxShadow: "none" }} onClick={(e) => setToggleNewReminder(!toggleNewReminder)}><i className={"bi bi-plus-lg"}></i></Button>
                            }
                        </ListGroup.Item>
                    </ListGroup>}
                </div>
                <div className={css.sidebar}>
                    {building_names.map(building => {
                        if (building === buildingId) {
                            return (<Link key={building} to={"/".concat(building)} style={{ textDecoration: 'none' }}>
                                <div className={css.active}> {building}</div>
                            </Link>)
                        }
                        else {
                            return (<Link key={building} to={"/".concat(building)} style={{ textDecoration: 'none' }}>
                                <div>{building}</div>
                            </Link>)
                        }
                    })}
                    {authenticated &&
                        <p>
                            {toggleNewBuilding ?
                                <form ref={buildingRef} className={css.add} onSubmit={handleAddBuilding}>
                                    <input type="text" name="ID" placeholder="Name…" value={newBuilding} onChange={handleBuildChange} />
                                    <Button style={{ margin: "2%", outline: "none", boxShadow: "none" }} variant="secondary" type="submit">Add Building</Button>
                                </form>

                                : <Button style={{ outline: "none", boxShadow: "none", margin: "10px" }} variant="outline-secondary" onClick={(e) => setToggleNewBuilding(!toggleNewBuilding)}>
                                    <i className={"bi bi-plus-lg"}></i>
                                </Button>
                            }
                        </p>
                    }

                </div>
            </div>
            <div className={css.contentBody}>
                <Table
                    data={data}
                    buildingId={buildingId}
                />
                {authenticated &&
                    <div>
                        <div className={css.plusButton}>
                            {toggleAddRow ?
                                <form ref={rowRef} className={css.plus} onSubmit={handleAddRow}>
                                    <input type="text" style={{ width: "10%", margin: "1%" }} name="name" placeholder="Name…" value={newRow.name} onChange={handleNRChange} />
                                    <input type="text" style={{ width: "10%", margin: "1%" }} name="location" placeholder="Location…" value={newRow.location} onChange={handleNRChange} />
                                    <input type="text" style={{ width: "10%", margin: "1%" }} name="size" placeholder="Size" value={newRow.size} onChange={handleNRChange} />
                                    <input type="text" style={{ width: "10%", margin: "1%" }} name="quantity" placeholder="Quantity" value={newRow.quantity} onChange={handleNRChange} />
                                    <span style={{ fontSize: "15px" }}>Last Date of Service: </span>
                                    <input type="date" style={{ width: "11%", margin: "1%" }} name="ldos" placeholder="Last Date of Service (YYYY-MM-DD)" value={newRow.ldos} onChange={handleNRChange} />
                                    <span style={{ fontSize: "15px" }}>Last Date of Service: </span>
                                    <input type="date" style={{ width: "11%", margin: "1%" }} name="ndos" placeholder="Next Date of Service (YYYY-MM-DD)" value={newRow.ndos} onChange={handleNRChange} />

                                    <Button style={{ outline: "none", boxShadow: "none" }} size="sm" variant="secondary" type="submit">Add Row</Button>
                                </form>
                                : <Button style={{ outline: "none", boxShadow: "none" }} variant="outline-secondary" onClick={(e) => setToggleAddRow(!toggleAddRow)}>
                                    <i className={"bi bi-plus-lg"}></i>
                                </Button>
                            }
                            <Button style={{ marginLeft: "10px", outline: "none", boxShadow: "none" }} variant="danger" onClick={handleDeleteBuilding}>
                                Delete Building
                            </Button>
                        </div>

                    </div>
                }
            </div>
            <div className={css.foot}>
                <span>Designed by Anviss Systems in Boston, MA</span>
            </div>
        </Container >
    );
}

export default Home;
import React, { createContext, useState, useEffect } from 'react';
import initialStore from 'utils/initialStore.js';
import localforage from 'localforage';
// export the context so that other components can import
export const StoreContext = createContext();

function StoreContextProvider(props) {
    //reminders, buildings, headers
    const [store, setStore] = useState(initialStore);
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    async function getDataFromStore(){
        localforage.getItem('store').then(value=>{
            setStore(JSON.parse(value) || initialStore);
        })
        .catch(()=>{
            console.log("caught");
            setStore(initialStore);
        }
        )
        setLoading(false);
    }

    useEffect(()=>{
        getDataFromStore();
    },[loading]
    )
    useEffect(()=>{
        window.localStorage.setItem('store', JSON.stringify(store));
        localforage.setItem('store', JSON.stringify(store));
    }, [store]);



    //updates item when service is marked as complete
    function completeService(buildingID, task) {
        const today = new Date();
        var plus_three = new Date();
        plus_three.setMonth(plus_three.getMonth() + 3);
        setStore({
            ...store,
            buildings: store.buildings.map(
                building => building.name === buildingID ? {
                    //locate current building in store
                    ...building,
                    data: building.data.map(
                        row => row.name === task ? {
                            ...row,
                            ldos: today.toDateString(),
                            ndos: plus_three.toDateString(),
                        } : row
                    )
                } : building
            )
        });
    }

    //modifies notes (newNote passed as obj)
    function editNote(buildingID, newNote) {
        setStore({
            ...store,
            buildings: store.buildings.map(
                building => building.name === buildingID ? {
                    //locate current building in store
                    ...building,
                    data: building.data.map(
                        row => row.name === newNote.row ? {
                            ...row,
                            notes: newNote.note,
                        } : row
                    )
                } : building
            )
        });
    }

    //modifies row from manual input
    function editRow(buildingID, newvals, task) {
        var newrow = newvals;
        delete newrow.index;
        setStore({
            ...store,
            buildings: store.buildings.map(
                building => building.name === buildingID ? {
                    ...building,
                    data: building.data.map(
                        row => (row.name === task ?
                            Object.assign({}, row, newrow)
                            : row)
                    )
                } : building
            )
        });
    }

    //delete item indicated by user
    function removeRow(buildingID, name) {
        setStore({
            ...store,
            buildings: store.buildings.map(
                building => building.name === buildingID ? {
                    ...building,
                    data: building.data.filter(row => !(row.name === name))
                } : building
            )
        })
    }

    //add item according to manual input
    function addRow(buildingID, name, size, quantity, ldos, ndos, location, notes) {
        const today = new Date();
        var plus_three = new Date();
        plus_three.setMonth(plus_three.getMonth() + 3);

        var lastService = ldos === '' ? today.toDateString() : ldos + "T00:00:00";
        var nextService = ndos === '' ? plus_three.toDateString() : ndos + "T00:00:00";
        const newrow = {
            name: name,
            location: location,
            size: size,
            quantity: quantity,
            ldos: lastService,
            ndos: nextService,
            notes: notes,
        }
        setStore({
            ...store,
            buildings: store.buildings.map(
                building => building.name === buildingID ? {
                    ...building,
                    data: building.data.concat(newrow)
                } : building
            )
        })
    }

    function addBuilding(buildingID) {
        const newbuilding = {
            name: buildingID,
            data: []
        }
        setStore({
            ...store,
            buildings: store.buildings.concat(newbuilding)
        })
    }

    function removeBuilding(buildingID) {
        setStore({
            ...store,
            buildings: store.buildings.filter(building => !(building.name === buildingID))
        })
    }

    function addReminder(name, media) {
        const newReminder = {
            name: name,
            media: media
        }
        setStore({
            ...store,
            reminders: store.reminders.concat(newReminder)
        })
    }

    function removeReminder(name) {
        setStore({
            ...store,
            reminders: store.reminders.filter(reminder => !(reminder.name === name))
        })
    }

    function addUser(username, password) {
        const newUser = {
            username: username,
            password: password
        }
        setStore({
            ...store,
            users: store.users.concat(newUser)
        })
    }

    return (
        <StoreContext.Provider value={{ ...store, authenticated, setAuthenticated, editNote, completeService, removeRow, addRow, editRow, addBuilding, removeBuilding, addReminder, removeReminder, addUser }}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;
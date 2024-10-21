import React, { useState } from 'react';
import './assets/styles/App.css';
import Form from './components/Form/Form';
import ItemList from './components/ItemList/ItemList';
import { addItemToList, updateItemInList, removeItemFromList } from './services/api';

function App() {

    const [items, setItems] = useState([]);

    const addItem = (itemName) => {

        const newItem = addItemToList(itemName);
        setItems([...items, newItem]);

    };

    const editItem = (item) => {

        const updatedItems = updateItemInList(item);
        setItems(updatedItems);

    };

    const deleteItem = (id) => {

        const updatedItems = removeItemFromList(id);
        setItems(updatedItems);

    }; 

    return (

        <div className="App">

            <h1>CRUD Application</h1>
            <Form addItem={addItem} />
            <ItemList items={items} editItem={editItem} deleteItem={deleteItem} />
            
        </div>

    );

}

export default App;
import React, { useState, useEffect } from 'react';
import './assets/styles/App.css';
import Form from './components/Form/Form';
import ItemList from './components/ItemList/ItemList';
import { fetchItems, addItemToList, updateItemInList, removeItemFromList } from './services/api';

function App() {
    const [items, setItems] = useState([]);
    const [currentItem, setCurrentItem] = useState(null);

    useEffect(() => {
        const loadItems = async () => {
            const fetchedItems = await fetchItems();
            setItems(fetchedItems);
        };

        loadItems();
    }, []);

    const addItem = async (itemName) => {
        const newItem = await addItemToList(itemName);
        setItems([...items, newItem]);
    };

    const editItem = async (item) => {
        const updatedItem = await updateItemInList(item);
        setItems(items.map(i => (i.id === updatedItem.id ? updatedItem : i)));
        setCurrentItem(null); // Reset current item after editing
    };

    const deleteItem = async (id) => {
        try {
            await removeItemFromList(id); // Esto llamará a la función que ajustaste
            setItems(items.filter(item => item.id !== id));
        } catch (error) {
            console.error('Error al eliminar el ítem:', error);
            // Aquí puedes mostrar un mensaje de error si lo deseas
        }
    };


    return (
        <div className="App">
            <h1>CRUD Application</h1>
            <Form addItem={addItem} editItem={editItem} currentItem={currentItem} setCurrentItem={setCurrentItem} />
            <ItemList items={items} editItem={setCurrentItem} deleteItem={deleteItem} />
        </div>
    );
}

export default App;


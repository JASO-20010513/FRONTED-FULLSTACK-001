import React, { useState, useEffect } from 'react';
import './Form.css';

const Form = ({ addItem, editItem, currentItem, setCurrentItem }) => {
    const [itemName, setItemName] = useState('');

    useEffect(() => {
        if (currentItem) {
            setItemName(currentItem.name);
        } else {
            setItemName('');
        }
    }, [currentItem]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentItem) {
            editItem({ ...currentItem, name: itemName });
            setCurrentItem(null); // Reset current item to null after editing
        } else {
            addItem(itemName);
        }
        setItemName(''); // Clear input field after submission
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                className="input-field"
                required
            />
            <button type="submit" className="add-btn">
                {currentItem ? 'Guardar Cambios' : 'Agregar Item'}
            </button>
        </form>
    );
};

export default Form;

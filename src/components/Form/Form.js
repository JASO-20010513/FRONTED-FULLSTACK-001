import React, { useState } from 'react';
import './Form.css';

const Form = ({ addItem }) => {

    const [newItem, setNewItem] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();

        if (newItem) {

            addItem(newItem);
            setNewItem('');

        }

    };

    return (
      
        <form className="form-container" onSubmit={handleSubmit}>

            <input
                type="text"
                value={newItem}
                placeholder="Add a new item"
                onChange={(e) => setNewItem(e.target.value)}
                className="input-field"
            />

            <button type="submit" className="add-btn">
                Add Item
            </button>

        </form>

    );

};

export default Form;

import React from 'react';
import './ItemList.css';

const ItemList = ({ items, editItem, deleteItem }) => {

    return (

        <ul className="item-list">

            {items.map((item) => (

                <li key={item.id} className="item">

                    <span>{item.name}</span>

                    <div>
                        <button className="edit-btn" onClick={() => editItem(item)}>Editar</button>
                        <button className="delete-btn" onClick={() => deleteItem(item.id)}>Eliminar</button>
                    </div>

                </li>

            ))}

        </ul>

    );

};

export default ItemList;

let itemList = [
    { id: 1, name: 'Example Item 1' },
    { id: 2, name: 'Example Item 2' },
];

export const addItemToList = (itemName) => {
    const newItem = { id: itemList.length + 1, name: itemName };
    itemList.push(newItem);
    return newItem;
};

export const updateItemInList = (item) => {
    itemList = itemList.map(i => (i.id === item.id ? item : i));
    return itemList;
};

export const removeItemFromList = (id) => {
    itemList = itemList.filter(item => item.id !== id);
    return itemList;
};
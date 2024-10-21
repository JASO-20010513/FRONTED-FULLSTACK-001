// Define la base URL de la API
const BASE_URL = 'http://localhost:8080/api';  // Cambia esta URL por la de tu servidor si es diferente

export const fetchItems = async () => {
    const response = await fetch(`${BASE_URL}/items`);
    if (!response.ok) {
        throw new Error('Error al obtener los items');
    }
    return await response.json();
};

export const addItemToList = async (itemName) => {
    const response = await fetch(`${BASE_URL}/items`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: itemName }),
    });
    if (!response.ok) {
        throw new Error('Error al agregar el item');
    }
    return await response.json();
};

export const updateItemInList = async (updatedItem) => {
    const response = await fetch(`${BASE_URL}/items/${updatedItem.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
    });
    if (!response.ok) {
        throw new Error('Error al actualizar el item');
    }
    return await response.json();
};

export const removeItemFromList = async (id) => {
    const response = await fetch(`${BASE_URL}/items/${id}`, {
        method: 'DELETE',
    });

    // Si la respuesta es 204, no hay contenido para procesar.
    if (response.status === 204) {
        return; // No hacemos nada, ya que el ítem se eliminó correctamente.
    }

    // Para otras respuestas, puedes manejar el error aquí.
    if (!response.ok) {
        throw new Error('Error al eliminar el ítem');
    }

    // Si la respuesta es JSON (en caso de que uses otros métodos), puedes analizarla aquí.
    return await response.json();
};

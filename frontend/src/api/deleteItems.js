const API_URL = `http://localhost:4000`;

export const deleteItems = async (itemId, itemType) => {
    const response = await fetch(`${API_URL}/movies/delete/${itemId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // Convert to JSON
    const json = await response.json();
    // Return JSON
    return json;
};
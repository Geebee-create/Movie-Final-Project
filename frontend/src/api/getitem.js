const API_URL = `http://localhost:4000`;

export const getItem = async (id, itemType) => {
    let response;
    if (itemType === 'post') {
        response = await fetch(`${API_URL}/posts/${id}`);
    } else if (itemType === 'comment') {
        response = await fetch(`${API_URL}/comments/${id}`);
    } else {
        throw new Error('Invalid item type specified');
    }

    const data = await response.json();
    return data;
};
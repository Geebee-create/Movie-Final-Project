const API_URL = `http://localhost:4000`;

export const addComment = async (comment) => {
    // Pass parameter to function
    // Create new object with 'text' key (depending on your Model)
    let obj = { text: comment };
    const response = await fetch(`${API_URL}/movies/comment`, {
        // Method type
        method: 'POST',
        // Sending body, stringify data
        body: JSON.stringify(obj),
        // Content type
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const json = await response.json();
    return json;
};
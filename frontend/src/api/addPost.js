const API_URL = `http://localhost:4000`;

export const addPost = async (post) => {
    // Pass parameter to function
    // Create new object with 'text' key (depending on your Model)
    let obj = { text: post };
    const response = await fetch(`${API_URL}/movies/post`, {
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
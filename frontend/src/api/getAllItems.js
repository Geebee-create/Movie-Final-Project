const API_URL = `http://localhost:4000`;

export const getAllPosts = async () => {
    const response = await fetch(`${API_URL}/posts`);
    const data = await response.json();
    return data;
};

export const getAllComments = async () => {
    const response = await fetch(`${API_URL}/comments`);
    const data = await response.json();
    return data;
};
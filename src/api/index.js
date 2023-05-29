import axios from "axios";

const endpoint = axios.create ({
baseURL: process.env.REACT_APP_API
});

const getBooks = () => endpoint.get("/books");
const postsBooks = (payLoad) => endpoint.post("/books",payLoad);
const getCartItems = () => endpoint.get("/cartItems");
const postCartItems = (payLoad) => endpoint.posts ("/cartItems", payLoad);

const api = {
    getBooks,
    postsBooks,
    getCartItems,
    postCartItems,
};

export default api;
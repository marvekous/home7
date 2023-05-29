import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

const fetchAllCart = createAsyncThunk("cart/fetchAll", async (payLoad, thunkApi) => {
    try{
        const response = await api.getCartItems();
        return response.data;
    }catch(err) {
        return thunkApi.rejectWithValue("Что-то пошло не так") ;
    }
});
export default fetchAllCart;
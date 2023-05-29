import { createSlice } from "@reduxjs/toolkit";
import fetchAllCart from "../actions/cartCreator";

const initialState = {
  isOpen: false,
  items: [],
  itemsIsError: "",
  itemsIsLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setisOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    addCart(state, action) {
        console.log(action.payload);
        if (state.items.find((el) => el.id === action.payload.id)) {
          const { id, price } = action.payload;
          state.items = state.items.map((el) => {
            if (id === el.id) {
              el.count += 1;
              el.total += price;
            }
            return el;
          });
        } else {
          state.items = [...state.items, action.payload];
        }
      },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAllCart.pending, (state, action) => {
      state.itemsIsLoading = true;
      state.itemsIsError = "";
      state.items = null;
    });

    builder.addCase(fetchAllCart.fulfilled, (state, action) => {
      state.itemsIsLoading = false;
      state.itemsIsError = "";
      state.items = action.payload;
    });

    builder.addCase(fetchAllCart.rejected, (state, action) => {
      state.itemsIsLoading = false;
      state.itemsIsError = action.payload;
      state.items = null;
    });
  },
});

const cartReducer = cartSlice.reducer;

export const { setisOpen, addCart } = cartSlice.actions;
export default cartReducer;
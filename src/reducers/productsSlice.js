import { createSlice, nanoid } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [
      {
        id: 1,
        name: "Product 1",
        description: "Description 1",
        price: 100,
        available: true,
      },
      {
        id: 2,
        name: "Product 2",
        description: "Description 2",
        price: 200,
        available: true,
      },
      {
        id: 3,
        name: "Product 3",
        description: "Description 3",
        price: 300,
        available: true,
      },
    ],
  },
  reducers: {
    addProduct: (state, { payload: newProduct }) => {
      if (state.products.some((item) => item.id === newProduct.id)) {
        return;
      }
      state.products.push(newProduct);
      console.log(newProduct);
    },

    prepare(name, description, price, available) {
      return {
        payload: { id: nanoid(), name, description, price, available },
      };
    },
    deleteProduct(state, action) {
      const filteredProducts = state.products.filter(
        (item) => item.id !== action.payload
      );
      state.products = filteredProducts;
      console.log(filteredProducts);
    },
    updateProduct(state, action) {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...action.payload };
      }
    },
    toggleAvailability(state, action) {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product) {
        product.available = !product.available;
      }
    },
  },
});

export const { addProduct, deleteProduct, updateProduct, toggleAvailability } =
  productsSlice.actions;

export default productsSlice.reducer;

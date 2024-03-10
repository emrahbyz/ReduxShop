import { createSlice } from "@reduxjs/toolkit";

const productsData = [
  {
    id: 1,
    name: "Ürün 1",
    price: 89.99,
    image:
      "https://productimages.hepsiburada.net/s/417/1500/110000446681787.jpg",
    quantity: 0,
  },
  {
    id: 2,
    name: "Ürün 2",
    price: 99.99,
    image:
      "https://productimages.hepsiburada.net/s/414/1500/110000442904979.jpg",
    quantity: 0,
  },
  {
    id: 3,
    name: "Ürün 3",
    price: 179.99,
    image:
      "https://productimages.hepsiburada.net/s/777/1500/110000635895234.jpg",
    quantity: 0,
  },
  {
    id: 4,
    name: "Ürün 4",
    price: 169.99,
    image:
      "https://productimages.hepsiburada.net/s/181/1500/110000144461595.jpg",
    quantity: 0,
  },
  {
    id: 5,
    name: "Ürün 5",
    price: 64.99,
    image:
      "https://productimages.hepsiburada.net/s/233/1500/110000215943208.jpg",
    quantity: 0,
  },
];

const initialState = {
  productsData: productsData,
};

const productSlice = createSlice({
  name: "products",
  initialState: JSON.parse(localStorage.getItem("number")) || initialState,
  reducers: {
    addProduct: (state, action) => {
      const { id } = action.payload;

      const product = state.productsData.find((item) => item.id === id);
      if (product) {
        product.quantity += 1;
        localStorage.setItem("number", JSON.stringify(state));
      }
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;

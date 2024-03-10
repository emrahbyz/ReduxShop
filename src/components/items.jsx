import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../shopSlices/slices/cartSlice";
import { addProduct } from "../shopSlices/slices/basketSlice";
import "../App.css";
function Items() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.productsData);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(addProduct(product));
  };

  return (
    <div className="App">
      <a href="http://localhost:5173/basket">Sepetime Git</a>

      <h2>Ürünler Listesi</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Fiyat: {product.price}</p>
          <p>Adet: {product.quantity}</p>
          <img src={product.image} alt="" />
          <button onClick={() => handleAddToCart(product)}>Sepete Ekle</button>
        </div>
      ))}
    </div>
  );
}

export default Items;

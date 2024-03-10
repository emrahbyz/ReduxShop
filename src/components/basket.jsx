import React from "react";
import { useSelector } from "react-redux";

function Basket() {
  const products = useSelector((state) => state.cart.items);
  const totalPrice = products
    .reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0)
    .toFixed(2);
  console.log(useSelector((state) => state.cart));

  return (
    <div className="container">
      <a href="http://localhost:5173">Mağazaya Dön</a>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.name} Fiyat:{product.price}
              <img src={product.image} alt="" />
              Adet: {product.quantity}
            </li>
          );
        })}
      </ul>
      <h3>Toplam Price:{totalPrice}</h3>
    </div>
  );
}

export default Basket;

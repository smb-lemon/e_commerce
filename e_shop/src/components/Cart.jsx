
import React from "react";
import "./Cart.css"; // Import the CSS file

const Cart = (props) => {
  const getTotalValue = () => {
    let totalValue = 0;

    for (let product of props.products) {
      totalValue += product.price * product.quantity;
    }

    return totalValue;
  };

  return (
    <div>
      <header className="header-home">
        <img className="img-logo" src="/src/assets/img/space-art-logo.png" alt="Logo" />
        <h2>CART</h2>
        <div>
          <button className="btn-back" onClick={props.renderPageFalse}>
            Continue Shopping
          </button>
        </div>
      </header>

      <main className="main-content">
        {props.products.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              <img src={product.imagemURL} alt={product.name} />
              <p>{product.name}</p>
              <p>R${product.price},00</p>
              <p>Quantity: {product.quantity}</p>
              <button onClick={() => props.removeProduct(product.id)}>
                Remove
              </button>
            </div>
          );
        })}
        <div className="total-value">
          <p>
            <strong>Total: R${getTotalValue()},00</strong>
          </p>
        </div>
      </main>

      <footer className="footer-home">
        <h3>By Hellen, Joana, and Mylena.</h3>
        <div className="social-icons">
          <img className="social-icon" src="/src/assets/img/facebook.png" alt="Facebook" />
          <img className="social-icon" src="/src/assets/img/instagram.png" alt="Instagram" />
          <img className="social-icon" src="/src/assets/img/twitter-logo.png" alt="Twitter" />
        </div>
      </footer>
    </div>
  );
};

export default Cart;

// App.jsx
import React from 'react';
import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';

const App = () => {
  const [state, setState] = React.useState({
    products: [
      { id: 1, name: 'Mug 1', price: 50.0, imageURL: '/img/cup1.gif', quantity: 1 },
      { id: 2, name: 'Mug 2', price: 44.0, imageURL: '/img/cup2.png', quantity: 1 },
      { id: 3, name: 'Mug 3', price: 80.0, imageURL: '/img/cup3.png', quantity: 1 },
      { id: 4, name: 'Mug 4', price: 300.0, imageURL: '/img/cup4.png', quantity: 1 },
      { id: 5, name: 'Mug 5', price: 20.0, imageURL: '/img/cup5.jpg', quantity: 1 },
      { id: 6, name: 'Mug 6', price: 150.0, imageURL: '/img/cup6.png', quantity: 1 },
    ],
    filter: '',
    query: '',
    minPrice: '',
    maxPrice: '',
    order: 1,
    page: false,
    productsInCart: [],
    added: false,
    productQuantity: 0,
  });

  // Utility functions to update the state
  const updateState = (updatedValues) => {
    setState((prevState) => ({ ...prevState, ...updatedValues }));
  };

  const addProductToCart = (productId) => {
    setState((prevState) => {
      const updatedQuantity = prevState.productQuantity + 1;
      const product = prevState.products.find((p) => p.id === productId);
      const productIndexInCart = prevState.productsInCart.findIndex((p) => p.id === productId);
      const updatedCart = productIndexInCart === -1
        ? [...prevState.productsInCart, product]
        : prevState.productsInCart.map((p, index) =>
            index === productIndexInCart ? { ...p, quantity: p.quantity + 1 } : p
          );
      return { ...prevState, productsInCart: updatedCart, productQuantity: updatedQuantity, added: false };
    });
  };

  const removeProductFromCart = (id) => {
    setState((prevState) => {
      const updatedCart = prevState.productsInCart
        .map((product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity - 1 };
          }
          return product;
        })
        .filter((product) => product.quantity > 0);
      return { ...prevState, productsInCart: updatedCart };
    });
  };

  const navigateToCart = () => updateState({ page: true });
  const navigateToHome = () => updateState({ page: false });

  // Filtering and sorting logic for products
  const filteredProducts = state.products
    .filter((prod) => prod.name.toLowerCase().includes(state.query.toLowerCase()))
    .filter((prod) => (state.minPrice === '' ? true : prod.price >= state.minPrice))
    .filter((prod) => (state.maxPrice === '' ? true : prod.price <= state.maxPrice))
    .sort((a, b) => state.order * (a.price - b.price))
    .map((product) => (
      <div key={product.id} className="card-product">
        <img src={product.imageURL} alt={product.name} className="product-img" />
        <p>{product.name}</p>
        <p>R${product.price},00</p>
        <button onClick={() => addProductToCart(product.id)}>Add to Cart</button>
      </div>
    ));

  return (
    <div>
      {state.page ? (
        <Cart
          products={state.productsInCart}
          removeProductFromCart={removeProductFromCart}
          navigateToHome={navigateToHome}
        />
      ) : (
        <div>
          <Home
            query={state.query}
            updateQuery={(e) => updateState({ query: e.target.value })}
            minPrice={state.minPrice}
            updateMinPrice={(e) => updateState({ minPrice: e.target.value })}
            maxPrice={state.maxPrice}
            updateMaxPrice={(e) => updateState({ maxPrice: e.target.value })}
            order={state.order}
            updateOrder={(e) => updateState({ order: parseInt(e.target.value) })}
            navigateToCart={navigateToCart}
            productQuantity={state.productQuantity}
          />
          <div className="main-principal">{filteredProducts}</div>
        </div>
      )}

      <footer className="footer-principal">
        <h3>By E_Store LTD.</h3>
        <div className="social-icons">
          <img src="/img/facebook.png" alt="Facebook" />
          <img src="/img/instagram.png" alt="Instagram" />
          <img src="/img/twitter-logo.png" alt="Twitter" />
        </div>
      </footer>
    </div>
  );
};

export default App;

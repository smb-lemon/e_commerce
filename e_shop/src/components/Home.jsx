
import React from "react";
import "./Home.css"; // Import the CSS file

class Home extends React.Component {
  render() {
    let valueCounter = this.props.quantityProducts;

    return (
      <div>
        <header className="header-home">
          <img className="img-logo" src="/img/space-art-logo.png" alt="Logo" />
          <h1>Space Art</h1>
          <input
            className="input-search"
            placeholder="Search by name"
            value={this.props.query}
            onChange={this.props.updateQuery}
          />
          <div className="button-and-counter">
            <p className="counter">{valueCounter}</p>
            <button className="button-cart" onClick={this.props.renderCart}>
              <img className="img-cart" src="/img/cart.png" alt="Cart" />
            </button>
          </div>
        </header>

        <div className="inputs-price">
          <div>
            <input
              className="input-min-max"
              type="number"
              placeholder="Min Price"
              value={this.props.minPrice}
              onChange={this.props.updateMinPrice}
            />
            <input
              className="input-min-max"
              type="number"
              placeholder="Max Price"
              value={this.props.maxPrice}
              onChange={this.props.updateMaxPrice}
            />
          </div>
          <div>
            <label htmlFor="sort">Sort Order:</label>
            <select
              className="order-select"
              name="order"
              value={this.props.order}
              onChange={this.props.updateOrder}
            >
              <option value={1}>Ascending</option>
              <option value={-1}>Descending</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

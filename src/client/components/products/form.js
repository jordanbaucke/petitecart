import React, { Component } from 'react';
import './form.css';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 0,
      description: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handlePriceChange(e) {
    this.setState({
      price: e.target.value
    });
  }

  handleDescriptionChange(e) {
    this.setState({
      description: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(`Submitting product...${JSON.stringify(this.state)}`);
    const product = {
      name: this.state.name,
      price: this.state.price,
      description: this.state.description
    };

    const params = {
      method: 'POST',
      body: JSON.stringify({
          name: this.state.name,
          price: this.state.price,
          description: this.state.description
      }),
      headers: {
        'content-type': 'application/json'
      }
    };

    fetch('/api/products', params)
      .then(res => res.json())
      .then(savedProductBody => {
          console.log("Saved product: "+ JSON.stringify(savedProductBody));
          this.setState({
            name: '', 
            price: 0,
            description: ''
          });
      });
  }

  render() {
    return (
      <div>
        <h3>New Product</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="product-name">Name</label>
          <input
            id="product-name"
            type="text"
            placeholder="Product Name"
            onChange={this.handleNameChange}
            value={this.state.name}
          />
          <label htmlFor="product-price">Price $</label>
          <input
            id="product-price"
            type="number"
            placeholder="Price"
            onChange={this.handlePriceChange}
            value={this.state.price}
          />
          <label htmlFor="product-description">Description</label>
          <textarea
            id="product-description"
            placeholder="Product Description"
            onChange={this.handleDescriptionChange}
            value={this.state.description}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    //history
    //this.props.history.push("/products");
    //use for login pages if user press bacck button then dont go to login page
    this.props.history.replace("/products");
  };

  render() {
    return (
      <div>
        <h1>Product Details -{this.props.match.params.id} </h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;

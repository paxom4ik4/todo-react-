import React, { Component } from "react";
import "./item-add-form.css";

class ItemAddForm extends Component {
  state = {
    label: "",
  };
  onLabelChange = (e) => {
    this.setState({ label: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: "",
      
    });
  };

  render() {
    const { onItemAdded } = this.props;

    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="Text"
          className="form-control"
          placeholder="What needs to be done"
          onChange={this.onLabelChange}
          value={this.state.label}
        ></input>
        <button
          type="submit"
          className="btn btn-outline-secondary"
          onClick={() => onItemAdded}
        >
          Add Item
        </button>
      </form>
    );
  }
}

export default ItemAddForm;

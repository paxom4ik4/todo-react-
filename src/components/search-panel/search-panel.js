import React, { Component } from "react";

import "./search-panel.css";

class SearchPanel extends Component {
  render() {
    const { onSearch, panelValue } = this.props;
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        value={panelValue}
        onChange={onSearch}
      />
    );
  }
}

export default SearchPanel;

import React, { Component } from "react";
import "./selectbox.css";

class Selectbox extends Component {
  state = {
    type: this.props.type || [],
    showtypes: false,
    selectedType: this.props.type && this.props.type[0],
  };

  dropdown = () => {
    this.setState((prevState) => ({
      showtypes: !prevState.showtypes,
    }));
  };

  selectItem = (type) =>
    this.setState({
      showtypes: true,
      selectedType: type,
    });

  render() {
    return (
      <div className="selectbox-container" onClick={this.dropdown}>
        <div className={`selectbox  ${this.state.showtypes ? "selectbox-open" : ""}`}>
          <div className="selected-item">
            <p>{this.state.selectedType.value}</p>
          </div>
          <div className="selectbox-arrow" >
            <span
              className={`${this.state.showtypes ? "arrowpoint-up" : "arrowpoint-down"
                }`}
            />
          </div>
          <div
            style={{ display: this.state.showtypes ? "block" : "none" }}
            className="selectbox-items"
          >
            {this.state.type.map((type) => (
              <div
                key={type.key}
                className={this.state.selectedType === type ? "selected" : ""}
                onClick={() => this.selectItem(type)}
              >
                {type.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Selectbox;

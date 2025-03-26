import React, { Component } from "react";

class UpdatingDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "Red", prevColor: "", status: "Component is Mounting..." };
  }

  static getDerivedStateFromProps(props, state) {
    return { color: props.favColor || state.color };
  }

  componentDidMount() {
    this.setState({ status: "Component Mounted Successfully!" });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return prevState.color;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== this.state.prevColor) {
      this.setState({ prevColor: snapshot });
    }
  }

  changeColor = () => {
    const newColor = this.state.color === "Red" ? "Blue" : "Red";
    this.setState({ color: newColor });
  };

  render() {
    return (
      <div style={{ padding: "20px", textAlign: "center", border: "2px solid black", width: "300px", margin: "auto" }}>
        <h2>React Updating Phase</h2>
        <p><b>Status:</b> {this.state.status}</p>
        <p><b>Current Color:</b> {this.state.color}</p>
        {this.state.prevColor && <p><b>Previous Color:</b> {this.state.prevColor}</p>}
        <button onClick={this.changeColor} style={{ margin: "10px", padding: "10px" }}>
          Change Color
        </button>
      </div>
    );
  }
}

export default UpdatingDemo;

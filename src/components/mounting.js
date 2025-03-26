import React, { Component } from "react";

class MountingDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "Red", status: "Component is Mounting..." };
  }

  static getDerivedStateFromProps(props, state) {
    return { color: props.favColor || state.color };
  }

  componentDidMount() {
    this.setState({ status: "Component Mounted Successfully!" });
  }

  render() {
    return (
      <div style={{ padding: "20px", textAlign: "center", border: "2px solid black", width: "300px", margin: "auto" }}>
        <h2>React Mounting Phase</h2>
        <p><b>Status:</b> {this.state.status}</p>
        <p><b>Color:</b> {this.state.color}</p>
      </div>
    );
  }
}

export default MountingDemo;

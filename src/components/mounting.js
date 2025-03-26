import React, { Component } from "react";

class MountingDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "Red", status: "Mounting Component..." };
    console.log("🔹 Mounting: Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("🔹 Mounting: getDerivedStateFromProps");
    return { color: props.favColor || state.color };
  }

  componentDidMount() {
    console.log("🔹 Mounting: componentDidMount ✅");
    this.setState({ status: "Component Mounted Successfully!" });
  }

  render() {
    console.log("🔹 Mounting: render()");
    return (
      <div style={styles.container}>
        <h2>🔵 Mounting Phase</h2>
        <p><b>Status:</b> {this.state.status}</p>
        <p><b>Color:</b> {this.state.color}</p>
      </div>
    );
  }
}

const styles = {
  container: { padding: "20px", textAlign: "center", border: "2px solid black", width: "300px", margin: "auto" }
};

export default MountingDemo;
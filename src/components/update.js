import React, { Component } from "react";

class UpdatingDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "Red", prevColor: "", status: "Mounting Component..." };
    console.log("🔹 Mounting: Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("🔹 Mounting/Updating: getDerivedStateFromProps");
    return { color: props.favColor || state.color };
  }

  componentDidMount() {
    console.log("🔹 Mounting: componentDidMount ✅");
    this.setState({ status: "Component Mounted Successfully!" });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("🔹 Updating: shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("🔹 Updating: getSnapshotBeforeUpdate");
    return prevState.color;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== this.state.prevColor) {
        console.log(`🔹 Updating: componentDidUpdate ✅ (Prev Color: ${snapshot})`);
      this.setState({ prevColor: snapshot });
    }
  }

  changeColor = () => {
    const newColor = this.state.color === "Red" ? "Blue" : "Red";
    this.setState({ color: newColor });
  };

  render() {
    console.log("🔹 Updating: render()");
    return (
      <div style={styles.container}>
        <h2>🟠 Updating Phase</h2>
        <p><b>Status:</b> {this.state.status}</p>
        <p><b>Current Color:</b> {this.state.color}</p>
        {this.state.prevColor && <p><b>Previous Color:</b> {this.state.prevColor}</p>}
        <button onClick={this.changeColor} style={styles.button}>
          Change Color
        </button>
      </div>
    );
  }
}

const styles = {
  container: { padding: "20px", textAlign: "center", border: "2px solid black", width: "300px", margin: "auto" },
  button: { margin: "10px", padding: "10px" }
};

export default UpdatingDemo;
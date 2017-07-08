import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import form from "./components/form";
import services from "./http-services";

const initialState = {
  symbolsData: null
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  componentDidMount() {
    services.symbols.get().then(result => {
      this.setState({ symbolsData: result.data });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          {this.state.symbolsData
            ? <form.view symbolsData={this.state.symbolsData} />
            : null}
        </div>
      </div>
    );
  }
}

export default App;

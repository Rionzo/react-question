import FormInput from "./components/FormInput";
import React, { useState, useEffect } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  showForm() {
    this.setState({ is_visible: true });
  }

  hideForm() {
    this.setState({ is_visible: false });
  }

  render() {
    return (
      <div className="container">
        <button
          className="btn  btn-primary"
          onClick={() => {
            this.setState({ show: !this.state.show });
            this.showForm();
          }}
        >
          Créer votre carte !{" "}
        </button>
        {this.state.show ? (
          <FormInput
            hideForm={this.hideForm.bind(this)}
            showForm={this.showForm}
          />
        ) : null}
      </div>
    );
  }
}

export default App;

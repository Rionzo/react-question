import React, { Component } from "react";
export default class FormInput extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    question: "",
    reponse: "",
    explication: "",
    items: [],
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      question: "",
      reponse: "",
      explication: "",
      items: [
        ...this.state.items,
        {
          question: this.state.question,
          reponse: this.state.reponse,
          explication: this.state.explication,
        },
      ],
    });
  };
  onClick = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      is_visible: false,
    });
  };

  renderCard = () => {
    return this.state.items.map((item, index) => {
      return (
        <div className="pt-1 col-3">
          <div className="bg-secondary text-light rounded lh-sm" key={index}>
            <div className="card-body">
              <h1 className="h1 text-primary text-center">{item.question}</h1>
              <hr />
              <p>
                <h3 className="fw-light">Réponse :</h3>
                <br />
                <div className="h4">{item.reponse}</div>
              </p>
              <p>
                <h3 className="fw-light">Explication : </h3> <br />
                <div className="h4">{item.explication}</div>
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="card my-3">
          <div className="card-header">
            <strong>Ajouter votre question ! </strong>
          </div>
          <section className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="question">Question</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="question"
                  onChange={this.onChange}
                  value={this.state.question}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Réponse">Réponse </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="reponse"
                  onChange={this.onChange}
                  value={this.state.reponse}
                />
              </div>

              <div className="form-group">
                <label htmlFor="explication">Explication</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="explication"
                  onChange={this.onChange}
                  value={this.state.explication}
                />
              </div>
              <div class="d-grid gap-2">
                <button
                  class="btn btn-primary mt-3"
                  type="submit"
                  onClick={this.props.hideForm}
                >
                  Créer votre fiche !
                </button>
              </div>
            </form>
          </section>
        </div>
        <div className="container">
          <div className="row">{this.renderCard()};</div>
        </div>
      </div>
    );
  }
}

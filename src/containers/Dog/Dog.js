import React, { Component } from "react";

import { connect } from "react-redux";
import { actionCreators } from "./actions";

class Dog extends Component {
  render() {
    const { fetching, dog, onRequestDog, error } = this.props;
    return (
      <div>
        <header>
          <img src={dog} alt="logo" />
          <h1>Welcome to Dog Saga</h1>
        </header>

        {dog ? (
          <p>Keep clicking for new dogs</p>
        ) : (
          <p>Replace the React icon with a dog!</p>
        )}

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={onRequestDog}>Request a Dog</button>
        )}

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog.dog,
    error: state.error
  };
};

const mapDispatchToProps = {
  onRequestDog: actionCreators.fetchDogStart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dog);

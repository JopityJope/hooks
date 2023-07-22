import React, { Component } from "react";

export class ImeigodineKlasa extends Component {
  render() {
    const { ime, godine } = this.props;
    return (
      <p>
        Korisnik/ca {ime} ima {godine} godina.
      </p>
    );
  }
}

export default ImeigodineKlasa;

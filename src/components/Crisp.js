import React, { Component } from "react";

import { Crisp } from "crisp-sdk-web";

class CrispChat extends Component {
  componentDidMount () {
    Crisp.configure("33c9096f-4659-436e-aba6-24c2ef60849f")
  }

  render () {
    return null;
  }
}
export default CrispChat
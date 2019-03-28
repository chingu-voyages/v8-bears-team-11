import React, { Component } from 'react'

import './Home.sass';

export default class Books extends Component {
  constructor(props){

    super(props);

    this.state = {
      test: null,
    };
  }

  render() {
    return (
      <div className="Books">
        <h1>Home</h1>
      </div>
    );
  }
}

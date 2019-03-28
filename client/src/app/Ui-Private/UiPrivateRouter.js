import React, { Component } from 'react'
import { Route } from "react-router-dom";
import Home from '../Home/Home';

export default class UiPrivateRouter extends Component {
  render() {
    return (
      <div className='UiPrivateRouter wrapper'>
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

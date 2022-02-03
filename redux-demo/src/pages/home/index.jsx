import React, { Component } from 'react';
import store from '../../store';

import sendAction from '../../actions';

export default class Home extends Component {

  handleClick = () => {
    const action = sendAction()
    store.dispatch(action)
  }

  componentDidMount() {
    store.subscribe(() => {
      console.log("subscribe", store.getState());
      this.setState({})
    })
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>点我发送一个action</button>;
        <div>{store.getState().value}</div>
      </>
    )
  }
}

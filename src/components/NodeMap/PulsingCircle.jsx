import React, { Component, Fragment } from 'react';

export default class PulsingCircle extends Component {
  constructor(props) {
    super(props);
    this.state= {
      color: props.color || '#693afa'
    };
  }

  render() {
    return (
      <Fragment>
        <circle stroke="#693afa" fill="none" cx={0} cy={0} r={10} />
        <circle fill="#5021E1" cx={0} cy={0} r={5} />
      </Fragment>
    )
  }
}
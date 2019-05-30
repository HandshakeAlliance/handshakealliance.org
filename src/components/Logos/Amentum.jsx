import React, { Component } from 'react';

const cls1 = {
  'fill': '#fff',
  'fontSize': '18.29px',
  'fontFamily': "'HelveticaNeue-Bold','Helvetica Neue'",
  'fontWeight': 700
}

const cls2 = {
  'fill': '#fff'
}

const cls3 = {
  'fill': '#e1f4ff',
  opacity: 0.67
}

const cls4 = {
  'fill': '#bde4ff',
  opacity: 0.67
}

const cls5 = {
  'fill': '#99d1ff',
  opacity: 0.67
}

const cls6 = {
  'fill': '#76bbff',
  opacity: 0.67
}

export default class Amentum extends Component {

  // <style>.cls-3,.cls-4,.cls-5,.cls-6{opacity: 0.67;}</style>



  render() {
    return (
      <svg height={(this.props.height || "100%")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245.84 139.45">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <text style={cls1} transform="translate(0.11 130.65)">AMENTUM</text>
            <polygon style={cls2} points="188.59 0 245.84 106.53 131.34 106.53 188.59 0" />
            <polygon style={cls3} points="162.95 22.22 245.84 106.53 100.01 106.53 162.95 22.22" />
            <polygon style={cls4} points="132.84 42.73 245.84 106.53 63.55 106.53 132.84 42.73" />
            <polygon style={cls5} points="102.83 59.82 245.84 106.53 31.07 106.53 102.83 59.82" />
            <polygon style={cls6} points="67.17 76.34 245.84 106.53 0.31 106.53 67.17 76.34" />
          </g>
        </g>
      </svg>
    )
  }
}

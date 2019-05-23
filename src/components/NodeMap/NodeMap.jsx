import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps";

export default class NodeMap extends Component {

  render() {
    return(
      <div>
        <ComposableMap>
          <ZoomableGroup>
            <Geographies geography={"/path/to/your/topojson-map-file.json or geography object"}>
              {(geographies, projection) => geographies.map(geography => (
                <Geography
                  key={geography.id}
                  geography={geography}
                  projection={projection}
                />
              ))}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}
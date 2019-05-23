import React, { Component } from 'react';
import { feature } from "topojson-client"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker
} from "react-simple-maps";
import * as NodeMap from './styled-components';
import data from '../../map-of-world.json';

export default class NodeMapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geographyPaths: [],
    };
    this.loadPaths = this.loadPaths.bind(this);
  }

  componentDidMount() {
    this.loadPaths()
  }

  loadPaths() {
    const world = data
    const geographyPaths = feature(
      world,
      world.objects[Object.keys(world.objects)[0]]
    ).features
    this.setState({ geographyPaths })
  }

  render() {
    return(
      <NodeMap.Wrapper>
        <ComposableMap
          projectionConfig={{
            scale: 160,
            rotation: [0, 0, 0],
          }}
          width={980}
          height={491}
          style={{
            width: "100%",
            height: "auto",
          }}
        >
          <ZoomableGroup>
            <Geographies geography={this.state.geographyPaths} disableOptimization>
              {(geographies, projection) =>
                geographies.map((geography, i) =>
                  <Geography
                    key={`${geography.properties.ADM0_A3}-${i}`}
                    cacheId={`path-${geography.properties.ADM0_A3}-${i}`}
                    round
                    geography={geography}
                    projection={projection}
                    style={{
                      default: {
                        fill: "#3e3e3e",
                        stroke: "#121212",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      hover: {
                        fill: "#464646",
                        stroke: "#3607C7",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      pressed: {
                        fill: "#FF5722",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                    }}
                  />
                )}
            </Geographies>
            <Markers>
              {/* Reston, Virgina - Verisign */}
              <Marker marker={{ coordinates: [-77.3421, 38.9567] }} tabable={false} style={{outline: "none"}}>
                <circle stroke="#693afa" fill="none" cx={0} cy={0} r={10} />
                <circle fill="#5021E1" cx={0} cy={0} r={5} />
              </Marker>
              {/* Marina del Rey, California - USC-ISI */}
              <Marker marker={{ coordinates: [-118.4532, 33.9855] }} tabable={false} style={{outline: "none"}}>
                <circle stroke="#693afa" fill="none" cx={0} cy={0} r={10} />
                <circle fill="#5021E1" cx={0} cy={0} r={5} />
              </Marker>
              {/* D.C., Virginia - Cogent Communications Inc. */}
              <Marker marker={{ coordinates: [-77.0364, 	38.8951] }} tabable={false} style={{outline: "none"}}>
                <circle stroke="#693afa" fill="none" cx={0} cy={0} r={10} />
                <circle fill="#5021E1" cx={0} cy={0} r={5} />
              </Marker>
              <Marker marker={{ coordinates: [-95.3633, 29.7633] }} tabable={false} style={{outline: "none"}}>
                <circle stroke="#693afa" fill="none" cx={0} cy={0} r={10} />
                <circle fill="#5021E1" cx={0} cy={0} r={5} />
              </Marker>
              {/* College Park, Maryland - U of Maryland */}
              <Marker marker={{ coordinates: [-76.9528, 38.9921] }} tabable={false} style={{outline: "none"}}>
                <circle stroke="#693afa" fill="none" cx={0} cy={0} r={10} />
                <circle fill="#5021E1" cx={0} cy={0} r={5} />
              </Marker>
              <Marker marker={{ coordinates: [-86.6546, 34.6333] }} tabable={false} style={{outline: "none"}}>
                <circle stroke="#693afa" fill="none" cx={0} cy={0} r={10} />
                <circle fill="#5021E1" cx={0} cy={0} r={5} />
              </Marker>
              {/* Mountain View, California - NASA Research Center */}
              <Marker marker={{ coordinates: [-122.2042, 37.4915] }} tabable={false} style={{outline: "none"}}>
                <circle stroke="#693afa" fill="none" cx={0} cy={0} r={10} />
                <circle fill="#5021E1" cx={0} cy={0} r={5} />
              </Marker>
              <Marker marker={{ coordinates: [-83.0128, 39.9664] }} tabable={false} style={{outline: "none"}}>
                <circle stroke="#693afa" fill="none" cx={0} cy={0} r={10} />
                <circle fill="#5021E1" cx={0} cy={0} r={5} />
              </Marker>
              <Marker marker={{ coordinates: [-110.3506, 31.5565] }} tabable={false} style={{outline: "none"}}>
                <circle stroke="#693afa" fill="none" cx={0} cy={0} r={10} />
                <circle fill="#5021E1" cx={0} cy={0} r={5} />
              </Marker>
              <Marker marker={{ coordinates: [18.0649, 59.3326] }} tabable={false} style={{outline: "none"}}>
                <circle stroke="#693afa" fill="none" cx={0} cy={0} r={10} />
                <circle fill="#5021E1" cx={0} cy={0} r={5} />
              </Marker>
              <Marker marker={{ coordinates: [4.8897, 52.3740] }} tabable={false} style={{outline: "none"}}>
                <circle stroke="#693afa" fill="none" cx={0} cy={0} r={10} />
                <circle fill="#5021E1" cx={0} cy={0} r={5} />
              </Marker>
              <Marker marker={{ coordinates: [139.6917, 35.6895] }} tabable={false} style={{outline: "none"}}>
                <circle stroke="#693afa" fill="none" cx={0} cy={0} r={10} />
                <circle fill="#5021E1" cx={0} cy={0} r={5} />
              </Marker>
            </Markers>
          </ZoomableGroup>
        </ComposableMap>
      </NodeMap.Wrapper>
    )
  }
}
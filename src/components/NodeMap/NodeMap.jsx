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

// https://www.iana.org/domains/root/servers
import rootNodes from './root-nodes.json';
import hnsNodes from './hns-nodes.json';
import PulsingCircle from './PulsingCircle';

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

  rootNodes = () => {
    let result = [];
    let index = 0;
    for(let el of rootNodes) {
      result.push(
        <Marker marker={{ coordinates: el.coord }} tabable={false} style={{ outline: "none" }} key={"r-" + index}>
          <PulsingCircle color={"#EC8C44"}/>
        </Marker>
      );
      index++;
    }
    return result;
  }

  hnsNodes = () => {
    let result = [];
    let index = 0;
    for (let el of hnsNodes) {
      let rand = Math.random() * (20 - 2) + 2;
      result.push(
        <Marker marker={{ coordinates: el.coord }} tabable={false} style={{ outline: "none" }} key={"h" + index}>
          <PulsingCircle delay={rand}/>
        </Marker>
      );
      index++;
    }
    return result;
  }

  allNodes = () => {
    return [].concat(this.hnsNodes()).concat(this.rootNodes());
  }

  render() {
    return(
      <NodeMap.Wrapper>
        <ComposableMap
          projectionConfig={{
            scale: 190,
            rotation: [0, 0, 0],
            xOffset: -10,
            yOffset: 30
          }}
          width={850}
          height={491}
          style={{
            width: "100%",
            height: "auto",
          }}
        >
          <ZoomableGroup disablePanning={true}>
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
                        fill: "#3e3e3e",
                        stroke: "#121212",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      pressed: {
                        fill: "#3e3e3e",
                        stroke: "#121212",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                    }}
                  />
                )}
            </Geographies>
            <Markers>
              {/* {this.rootNodes()}
              {this.hnsNodes()} */}
              {this.allNodes()}
            </Markers>
          </ZoomableGroup>
        </ComposableMap>
      </NodeMap.Wrapper>
    )
  }
}

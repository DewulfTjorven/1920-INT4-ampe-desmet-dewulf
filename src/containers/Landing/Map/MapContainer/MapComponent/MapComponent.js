import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import style from "./MapComponent.module.css";

class MapComponent extends Component {

  state = {
    viewport: {
      width: "40rem",
      height: "40rem",
      latitude: 42.430472,
      longitude: -123.334102,
      zoom: 10
    }
  };

  render(){
    return(
      <div className="App">
      <ReactMapGL  {...this.state.viewport} 
        onViewportChange={(viewport => this.setState(viewport))} 
        mapboxApiAccessToken="pk.eyJ1IjoidGpvcnZlbjAxIiwiYSI6ImNrYnIxMG40cTAwOHEyd281aGxwdTZ5MngifQ.xwH-xbZIV8lNbOCBdNg3lw" 
        mapStyle="mapbox://styles/mapbox/outdoors-v11">
      </ReactMapGL>
    </div>
    );
  }
}

export default MapComponent;
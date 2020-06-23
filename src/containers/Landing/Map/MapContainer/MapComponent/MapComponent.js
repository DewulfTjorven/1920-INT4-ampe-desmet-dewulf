import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';


const MAPBOX_TOKEN = 'pk.eyJ1IjoidGpvcnZlbjAxIiwiYSI6ImNrYnIxMmxmMDF1NzcyeXBvNHM2YjBnNzMifQ.5WonWwqth8j3XerHy1wjsQ'; // Set your mapbox token here

  

class MapComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.8,
        longitude: -122.4,
        zoom: 14,
        bearing: 0,
        pitch: 0
      }
    };
    
  }



  render() {
    return (
      <ReactMapGL 
        scrollZoom={false} 
        doubleClickZoom={false}
        {...this.state.viewport}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/tjorven01/ckbs7ant86y7s1ipiha9kzux5"
        onViewportChange={viewport => this.setState({viewport})}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      />
      
    );
  }
}

export default MapComponent;
import React, { Component } from 'react';
import ReactMapGL , { Marker } from 'react-map-gl';

import style from "./MapComponent.module.css";
import pin from "../../../../../img/logo.png";


const MAPBOX_TOKEN = 'pk.eyJ1IjoidGpvcnZlbjAxIiwiYSI6ImNrYnIxMmxmMDF1NzcyeXBvNHM2YjBnNzMifQ.5WonWwqth8j3XerHy1wjsQ'; // Set your mapbox token here



class MapComponent extends Component {

  state = {
    viewport : {
      width: "100vw",
      height: "100vh",
      latitude: 42.430472,
      longitude: -123.334102,
      zoom: 16
    },
    userLocation: {}
  }

  setUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      let setUserLocation = {
        lat: position.coords.latitude,
        long: position.coords.longitude
      };
        let newViewport = {
            height: "100vh",
            width: "100vw",
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            zoom: 12
        }
        this.setState({
            viewport: newViewport,
            userLocation: setUserLocation
        })
    })
}


  render() {
    return (
      <>
      <button onClick={this.setUserLocation}>View spots close to you</button>
      <ReactMapGL 
        scrollZoom={false} 
        //doubleClickZoom={false}
        {...this.state.viewport}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/tjorven01/ckbs7ant86y7s1ipiha9kzux5"
        onViewportChange={viewport => this.setState({viewport})}
        mapboxApiAccessToken={MAPBOX_TOKEN}> 

        {Object.keys(this.state.userLocation).length !== 0 ? (
          <Marker
            latitude={this.state.userLocation.lat}
            longitude={this.state.userLocation.long}
          >
            <img className={style.ocation__pin} src={pin} width="92px" height="64px" alt="location pin"></img>
          </Marker>
        ) : ( 
          <div>Empty</div>
        )}

      </ReactMapGL>
      </>
    );
  }
}

export default MapComponent;



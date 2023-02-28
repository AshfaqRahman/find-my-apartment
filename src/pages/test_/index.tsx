import React from "react";
import GoogleMapReact from "google-map-react";

const MapMarker = (param : { text:any }) => <div>{param.text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCuEdbWpHFcHr-UcJ4etrd7hwdrnyJiuk4" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <MapMarker text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
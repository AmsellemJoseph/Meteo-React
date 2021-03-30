import React from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'



const Carte = ({ coord }) => {
  console.log(coord.lat);
  const defaultPosition = [coord.lat, coord.lon];

  function ChangeMapView({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());

    return null;
  }


  return (
    <div id='mapid'>
      <MapContainer style={{ width: "50vw", height: "50vh" }} center={defaultPosition} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeMapView coords={defaultPosition} />
      </MapContainer>
    </div>
  )
};

export default Carte

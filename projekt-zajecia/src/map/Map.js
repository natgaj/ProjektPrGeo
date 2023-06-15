import React from 'react'
import './Map.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { dronIcon } from './Icon'
import MarkerPlacement from './MarkerPlacement';


function Map() {
    return (

        <div className='map_main'>
            <MapContainer
                center={[52.232222, 21.008333]}
                zoom={12}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <MarkerPlacement />

            </MapContainer>




        </div >
    )
}

export default Map

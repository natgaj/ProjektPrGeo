import React, { useEffect, useState } from 'react'
import './Map.css'
import { MapContainer, TileLayer, LayersControl, WMSTileLayer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import MarkerPlacement from './MarkerPlacement';
import axios from 'axios';

function Map() {
    const [budynki, setBudynki] = useState()

    const makePopup = (feature, layer) => {
        if (feature) {
            layer.bindPopup(
                `<h1> NAZWA OBIEKTU </h1>
            ${feature.properties.nazwa}`
            )
        }

    }




    useEffect(() => {

        const getData = () => {
            axios
                .get(`http://localhost:8080/geoserver/prgeo/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prgeo%3Abudynki&maxFeatures=50&outputFormat=application%2Fjson`) // tutaj uważać na link
                .then(
                    (dane) => {
                        console.log(dane.data);
                        setBudynki(dane.data)

                    })
                .catch(
                    (error) => {
                        console.log(error);
                        return null;
                    })
        }
        getData();

    }, [])

    return (
        <div className='map_main'>
            <MapContainer
                center={[52.232222, 21.008333]}
                zoom={15}
            >

                <LayersControl position="topright">
                    <LayersControl.BaseLayer checked name='OSM' >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name='WMS google Satelite' >
                        <TileLayer
                            url="http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name='WMS open topo map' >
                        <TileLayer
                            url="https://tile.opentopomap.org/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>

                    <LayersControl.BaseLayer name='Countries WMS' >
                        <WMSTileLayer
                            layers='countries'
                            url="http://localhost:8080/geoserver/ne/wms?" // tutaj uważać na link
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name='Budynki WMS' >
                        <WMSTileLayer
                            layers='budynki'
                            url="http://localhost:8080/geoserver/ne/wms?" // tutaj uważać na link
                        />
                    </LayersControl.BaseLayer>



                    <LayersControl.Overlay name='Budynki WFS' >
                        {budynki ? <GeoJSON data={budynki} onEachFeature={makePopup} /> : ""}
                    </LayersControl.Overlay>




                    <MarkerPlacement />
                </LayersControl>
            </MapContainer>



        </div>
    )
}

export default Map
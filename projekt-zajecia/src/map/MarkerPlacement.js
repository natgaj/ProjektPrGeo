import React, { useState } from 'react'
import { Marker, Popup, useMapEvent } from 'react-leaflet'
import { dronIcon } from './Icon'

function MarkerPlacement() {
    const [position, setPosition] = useState(null) //react hooks



    const map = useMapEvent({
        click: (e) => {
            console.log(e.latlng)
            setPosition(e.latlng)
        }
    })

    return position === null ? null : (
        <div>

            <Marker icon={dronIcon} position={position}>
                <Popup>
                    długość: {position.lat} <br /> szerokość: {position.lng}
                </Popup>

            </Marker>

        </div >
    )
}

export default MarkerPlacement
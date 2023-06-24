import React, { useState } from 'react'
import { Circle, Marker, Popup, useMapEvent } from 'react-leaflet'
import { dronIcon } from './Icon'

function MarkerPlacement() {
    const [position, setPosition] = useState(null)
    const [mass, setMass] = useState(0)

    const promien = (mass) => {
        console.log(Math.pow(mass, 1 / 3) / Math.pow(80 / 980, 1 / 1.89))
        return Math.pow(mass, 1 / 3) / Math.pow(80 / 980, 1 / 1.89)
    }

    const map = useMapEvent({
        click: (e) => {
            console.log(e.latlng.lng)
            setPosition(e.latlng)
        }
    })

    return position === null ? null : (
        <div>
            <Marker icon={dronIcon} position={position}>
                <Popup >
                    Podaj masę ładunku wybuchowego w kg
                    <input
                        type='range'
                        min="0"
                        max="200"
                        defaultValue="0"
                        onChange={e => setMass(e.target.value)}

                    />
                    {mass} kg
                </Popup>
                <Circle
                    center={position}
                    radius={promien(mass)}
                    pathOptions={{ color: 'red' }}
                >
                </Circle>

            </Marker>

        </div >
    )
}

export default MarkerPlacement
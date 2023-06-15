import React from 'react'

function WeatherCard({ stacja, temperatura, cisnienie }) {
    return (
        <div>
            <div className='weather_card'>
                <div className='weather_title'>Stacja {stacja}</div>
                <div className='weather_params'>
                    Temperatura: {temperatura} &deg;C, <br />
                    Ciśnienie: {cisnienie} hPa
                </div>
            </div>
        </div>
    )
}

export default WeatherCard
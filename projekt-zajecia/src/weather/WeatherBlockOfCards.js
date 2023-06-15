import React from 'react'
import WeatherCard from './WeatherCard'

function WeatherBlockOfCards({ danePogodowe }) {
    return (
        <div>

            <div className='weather_block'>
                {
                    danePogodowe.map(
                        ({ id_stacji, stacja, temperatura, cisnienie }) => {
                            return <WeatherCard
                                key={id_stacji}
                                stacja={stacja}
                                temperatura={temperatura}
                                cisnienie={cisnienie}
                            />
                        })
                }
            </div>

        </div >
    )
}

export default WeatherBlockOfCards
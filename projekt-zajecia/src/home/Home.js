import React from 'react'

import './Home.css'
import zdjecie from './dron.png.png'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='home_main' >
            <div className='home_top'>
                <div className='home_about'>O projekcie </div>
            </div>
            <div className='home_bottom'>
                <div className='home_left'>
                    <img className='home_logo' src={zdjecie} alt='logo' />
                </div>

                <div className='home_right'>
                    <h1 className='home_title'>PORTAL O DRONACH  </h1>
                    <div className='subtitle_title'>Najlepszy portal o dronach w sieci www  </div>


                    <Link to="services">
                        <button className='home_button'>WCHODZĘ! </button>
                    </Link>


                </div>

            </div >
        </div >
    )
}

export default Home
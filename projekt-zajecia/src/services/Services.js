import React from "react";
import "./Services.css";
import Map from "../map/Map";
import { Link } from "react-router-dom";
import zdjecie1 from "./dziekan.jpg";
import zdjecie2 from "./biblioteka.jpg";
import zdjecie3 from "./promocja.jpg";
import zdjecie4 from "./sztab.jpg";

import ListIcon from '@mui/icons-material/List';
import Button from '@mui/material/Button';

function Services() {
    return (
        <div className="services_main">
            <div className="services_bottom">
                <div className="services_left">
                    <h1 className="services_title">DOSTĘPNE USŁUGI </h1>

                    <Link to="map">
                        <button className="services_button">Mapa </button>
                    </Link>

                    <Link to="bazabsp">
                        <Button className="services_button"><ListIcon />Baza BSP </Button>
                    </Link>

                    <Link to="weather">
                        <button className="services_button"> Poka Poka Pogodę </button>
                    </Link>
                </div>

                <div className="services_right">
                    <div>
                        <img className="services_logo1" src={zdjecie1} alt="logo1" />{" "}
                        <img className="services_logo2" src={zdjecie2} alt="logo2" />
                        <div>
                            <img className="services_logo3" src={zdjecie3} alt="logo3" />{" "}
                            <img className="services_logo4" src={zdjecie4} alt="logo4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
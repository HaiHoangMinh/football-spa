import React from 'react';
import './resource/style.css';
import { Element } from 'react-scroll';

import Header from './compoment/header_footer/Header.js';
import Featured from './compoment/featured/index';
import VenueNfo from './compoment/venueNfo';
import Hightlights from './compoment/Hightlights/index.js';
import Pricing from './compoment/Pricing';
import Location from './compoment/location';
import Footer from './compoment/header_footer/footer'

function App() {
    return ( <
        div className = "App"
        style = {
            { height: "1500px", background: "lightblue" } } >
        <
        Header / >
        <
        Element name = "feature" > < /Element> <
        Featured / >
        <
        Element name = "venue UFOs" > < /Element> <
        VenueNfo / >
        <
        Element name = "hightlights" > < /Element> <
        Hightlights / >
        <
        Element name = "pricing" > < /Element> <
        Pricing / >
        <
        Element name = "location" > < /Element> <
        Location / >
        <
        Footer / >
        <
        /div>
    );
}

export default App;
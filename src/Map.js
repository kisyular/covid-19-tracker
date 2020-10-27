import React from 'react';
import {Map as LeafletMap, TileLayer} from 'react-leaflet'
import './Map.css'
import {showDataOnMap} from './utils';


const Map = ({center, zoom, casesType, countries}) => {
    return (
        <div className='map'>
            <LeafletMap zoom={zoom} center={center} >
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="https://osm.org/copyright"OpenStreetMap</a> contributors'>
                </TileLayer>
                {showDataOnMap(countries, casesType)}
            </LeafletMap>
        </div>
    );
};

export default Map;

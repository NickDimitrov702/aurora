import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {

    const mapStyles = {
        height: "400px",
        width: "500px",
        borderRadius: '15px'
    };

    const defaultCenter = {
        lat: 41.3851, lng: 2.1734
    }

    return (
        <LoadScript
            googleMapsApiKey='AIzaSyA4thCvDnu2tAAic7UypXErl1P07G26cP0'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
            />
        </LoadScript>
    )
}

export default MapContainer;
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// 43.208194600000006, 27.905012469312904
const MapContainer = () => {

    const mapStyles = {
        height: "400px",
        width: "400px",
        margin:'5px',
        borderRadius: '15px'
    };

    const defaultCenter = {
        lat: 43.208194600000006, lng: 27.905012469312904
    }

    const locations = [
        {
            name: "Location 1",
            location: {
                lat: 43.208194600000006,
                lng: 27.905012469312904
            }
        }
    ]
    // ala bala
    return (
        <LoadScript
            googleMapsApiKey='AIzaSyA4thCvDnu2tAAic7UypXErl1P07G26cP0'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={20}
                center={defaultCenter} >
            {locations.map(item => {
                return (
                    <Marker key={item.name} position={item.location} />
                )
            })}
            </GoogleMap>
        </LoadScript>
    )
}

export default MapContainer;
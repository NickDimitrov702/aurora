import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// 43.208194600000006, 27.905012469312904
const MapContainer = () => {

    const mapStyles = {
        height: "400px",
        width: "100%",
        margin:'5px',
        borderRadius: '15px',
        textShadow: "2px 2px 24px rgba(0, 0, 0, 0.966);"
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
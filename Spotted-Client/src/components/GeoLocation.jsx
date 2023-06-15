import { useEffect, useState } from "react";
import axios from "axios";

const GeoLocation = ({ setLocation }) => {

    const [ latitude, setLatitude ] = useState('');
    const [ longitude, setLongitude ] = useState('');
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        })
        if (!longitude) return
        axios.get('https://geocodeapi.p.rapidapi.com/GetNearestCities', {
            params: {
                latitude: latitude,
                longitude: longitude,
                range: '0'
            },
            headers: {
                'X-RapidAPI-Key': '0c645c10e6msh6525d16d198ff4ap1191ffjsnd7b198d33643',
                'X-RapidAPI-Host': 'geocodeapi.p.rapidapi.com'
            }   
            })
            .then((response) => {
                setLocation(response.data[0].City)
            })
            .catch((error) => {
                console.error(error)
            });
    }, [longitude]);
}

export default GeoLocation;
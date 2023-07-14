
import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './ghome.css'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

function Ghome(props) {
  let DefaultIcon = L.icon({ iconUrl: icon, shadowUrl: iconShadow });

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      function (error) {
        console.warn('Error Code' + error.code + ': ' + error.message);
        alert('Error getting your location. Please check the console.');
      }
    );
  }, []);

  useEffect(() => {
    const container = L.DomUtil.get('myMap');
    if (container !== null) {
      container._leaflet_id = null;
    }

    const southWest = L.latLng(latitude - 0.05, longitude - 0.05);
    const northEast = L.latLng(latitude + 0.05, longitude + 0.05);
    const bounds = L.latLngBounds(southWest, northEast);

    const map = L.map('myMap', {
      maxBounds: bounds,
      maxBoundsViscosity: 1.0,
    }).fitBounds(bounds);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 10,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'YOUR_MAPBOX_ACCESS_TOKEN',
    }).addTo(map);

    L.Marker.prototype.options.icon = DefaultIcon;
    const marker = L.marker([latitude, longitude]).addTo(map);
    marker.bindPopup(`<b>Your location</b><br>City: ${city}`).openPopup();

    const destinationMarker = L.marker([props.latitude || latitude, props.longitude || longitude]).addTo(map);
    destinationMarker.bindPopup('<b>Destination</b>').openPopup();

    reverseGeocode(latitude, longitude);
  }, [latitude, longitude, props.latitude, props.longitude]);

  const reverseGeocode = (lat, lng) => {
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.address) {
          const cityName = data.address.city || data.address.town || data.address.village || '';
          setCity(cityName);
        }
      })
      .catch((error) => {
        console.warn('Error retrieving city name:', error);
      });
  };

  return (
    <div id="myMap" style={{ height: '50vh', marginTop: '60px', width: '500px', marginLeft: '100px' }}></div>
  );
}

export default Ghome;


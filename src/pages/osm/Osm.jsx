
import {Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import L from 'leaflet/dist/leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import './osm.css'
import '../../components/Footer' 
import Footer from '../../components/Footer';
function Osm(props) {
  let DefaultIcon = L.icon({ iconUrl: icon, shadowUrl: iconShadow });

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (p) {
        setLatitude(p.coords.latitude);
        setLongitude(p.coords.longitude);
      },
      function (err) {
        console.warn('Error Code' + err.code + ': ' + err.message);
        alert('Check the console');
      }
    );
  }, []);

  useEffect(() => {
    var container = L.DomUtil.get('myMap');
    if (container !== null) {
      container._leaflet_id = null;
    }

    var map = L.map('myMap').setView([latitude, longitude], 12);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 10,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoidGFyLWhlbCIsImEiOiJjbDJnYWRieGMwMTlrM2luenIzMzZwbGJ2In0.RQRMAJqClc4qoNwROT8Umg',
    }).addTo(map);

    L.Marker.prototype.options.icon = DefaultIcon;
    var marker = L.marker([latitude, longitude]).addTo(map);
    marker.bindPopup('<b>Your location</b>').openPopup();

    var destinationMarker = L.marker([latitude, longitude]).addTo(map);
    destinationMarker.bindPopup('<b>Destination</b>').openPopup();
  }, [latitude, longitude, props.latitude, props.longitude]);

  return<div id="myMap" style={{ height: '70vh',marginTop: '128px',width:'950px',marginLeft:'150px'}
  }>
  <div className="Osm">
     
        <Link to="/cform" className='btn_log'>Contribution</Link>
    </div>
</div>
}export default Osm

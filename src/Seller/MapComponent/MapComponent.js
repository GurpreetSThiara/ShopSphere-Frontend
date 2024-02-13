import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const MapComponent = () => {
  const [userLocation, setUserLocation] = useState(null);
  console.log(userLocation)

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get('https://ipapi.co/json/');
        setUserLocation({
          latitude: response.data.latitude,
          longitude: response.data.longitude
        });
      } catch (error) {
        console.error('Error fetching user location:', error);
      }
    };

    fetchLocation();
  }, []);

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <MapContainer center={userLocation || [29.4803, 76.8254]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {userLocation && (
          <Marker position={[userLocation.latitude, userLocation.longitude]}>
            <Popup>
              Your current location.
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MapComponent;

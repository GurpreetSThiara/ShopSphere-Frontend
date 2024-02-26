import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { FaMapMarkerAlt } from 'react-icons/fa';
import L, { Icon } from 'leaflet';
import { Skeleton } from '@mui/material';

const Map = ({ onMarkerSet , setStreetAddress }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);

  useEffect(() => {
    // Get user's current location using geolocation API
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation([position.coords.latitude, position.coords.longitude]);
        setMarkerPosition([position.coords.latitude, position.coords.longitude]);
        onMarkerSet(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        console.error('Error getting :', error);
      }
    );
  }, []);

  const handleMapClick = (e) => {
    console.log(e)
    setMarkerPosition(e.latlng);
    onMarkerSet(e.latlng.lat, e.latlng.lng);
    getMarkerAddress(e.latlng.lat, e.latlng.lng);
  };

  const MapClickHandler = () => {
    useMapEvents({
      click: handleMapClick,
    });
    return null; // This component doesn't render anything
  };

  const customIcon = new Icon({
    iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });



const getMarkerAddress = async (latitude, longitude) => {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (response.ok) {
      const address = data.display_name; // Extract the formatted address
      console.log(address)
      setStreetAddress(address)
      return address;
    } else {
      throw new Error(data.error || 'Failed to fetch address');
    }
  } catch (error) {
    console.error('Error fetching address:', error.message);
    return null;
  }
};
  
 if(!currentLocation){
  return  <Skeleton variant="rectangular" height={400} width="100%" />
 }
  return (
    <MapContainer center={currentLocation} zoom={13} style={{ height: '400px', width: '100%' }}  onClick={handleMapClick}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markerPosition && <Marker icon={customIcon}   position={markerPosition}></Marker>}
      <MapClickHandler/>
    </MapContainer>
  );
};

export default Map;

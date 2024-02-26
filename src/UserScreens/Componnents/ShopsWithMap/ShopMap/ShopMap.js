import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNearByShops } from '../../../../store/nearBy-shops-slice';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Container, Grid, LinearProgress, Skeleton, Typography } from '@mui/material';
import  L,{ Icon } from 'leaflet';
import { Image } from '@mui/icons-material';
import NearByShops from '../NearByShops/NearByShops';
import './ShopMap.css'
import { MdLocationPin } from "react-icons/md";
import { FaUser } from 'react-icons/fa'; // Import the React-icon component

const ShopMap = () => {
    const { isNearByShopsLoading, shops, error } = useSelector((s) => s.nearByShops);
    const [currentPosition, setCurrentPosition] = useState(null);
    const [sliderValue, setSliderValue] = useState(1000);
    const dispatch = useDispatch();
    const token = localStorage.getItem('jwt');


    const handleChangeSlider = (e)=>{
        setSliderValue(e.target.value)
    }
    const customIcon = new Icon({
        iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });
      const customIcon1 = new Icon({
        iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });
      const userIcon = L.icon({
        iconUrl: 'data:image/svg+xml;base64,' + btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C7.31 0 3.1 4.2 3.1 9c0 6.3 8.9 14.7 8.9 14.7s8.9-8.4 8.9-14.7C20.9 4.2 16.69 0 12 0zm0 13c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>'),
        iconSize: [24, 24], // Set the size of the icon
      });
      
    

    useEffect(() => {
        // Fetch nearby shops based on current position
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCurrentPosition([latitude, longitude]);
                dispatch(getNearByShops({ token:token,latitude:latitude, longitude:longitude,radius:sliderValue }));
            },
            (error) => {
                console.error('Error getting current position:', error);
            }
        );
    }, [dispatch,sliderValue]);
    if(!currentPosition){
        return  <Skeleton variant="rectangular" height={400} width="100%" >
            <Container maxWidth="md" style={{alignItems:'center', display:'flex',justifyContent:'center' }}>
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h2" fontSize={35} align="center" gutterBottom>
          Loading Map
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <LinearProgress style={{ width: '80%' }} />
      </Grid>
 
    </Grid>
  </Container>
        </Skeleton>
       }
    return (
  
          <div style={{height:500,padding:'2rem'}}>
            <MapContainer center={currentPosition} zoom={10} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {/* Render m markers for each shop */}
                <Marker icon={userIcon} position={currentPosition}>
                        <Popup>
                           User Location
                        </Popup>
                    </Marker>
             
                {shops?.map((shop, index) => (
                    <Marker icon={customIcon} key={index} position={[shop.latitude, shop.longitude]}>
                        <Popup>
                            <div>
                                <Typography>{shop.shopName}</Typography>
                                <img src={shop.logoImageUrl} alt='Shop'/>
                                 
                                {/* <h3>{shop.name}</h3> */}
                                <p>{shop.address}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
            <div className="slidecontainer">
  <input type="range" min="1" max="2000" value={sliderValue} class="slider" id="myRange" onChange={handleChangeSlider}/>
</div>
        </div>
  
    );
};

export default ShopMap;

import React from 'react';
import './NearByShop.css'
import { setSelectedShop } from '../../../../../store/shop-user-view-slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
const NearByShop = ({ shop }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoToShop = () => {
        dispatch(setSelectedShop(shop));
        navigate('/allShops/Shop');
    }
  return (
    <div className="shop-card" onClick={handleGoToShop}>
      <div className="shop-card__image">
        <img src={shop.logoImageUrl} alt={shop.shopName} />
      </div>
      <div className="shop-card__details">
        <h2 className="shop-card__name">{shop.shopName}</h2>
   
        <p className="shop-card__contact">Contact: {shop.phoneNumber}</p>
      </div>
    </div>
  );
};

export default NearByShop;

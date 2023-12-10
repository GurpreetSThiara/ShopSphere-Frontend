// rootReducer.js

import { combineReducers } from '@reduxjs/toolkit';
import { reviewReducer } from './productReview-slice';
import { ratingReducer } from './productRating-slice';


const rootReducer = combineReducers({
  reviews: reviewReducer,
  ratings: ratingReducer,
});

export default rootReducer;

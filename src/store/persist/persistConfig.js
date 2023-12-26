

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['selectedShop'],
};

export const createPersistReducer = (reducer) => persistReducer(persistConfig, reducer);

import logger from 'redux-logger';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import type { Transform, WebStorage } from 'redux-persist';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AuthReducer from 'application/auth/Auth.slice';
// reducers import

interface PersitConfig {
  key: string;
  storage: WebStorage;
  transforms?: [Transform<unknown, string, any, any>];
}

const rootReducer = combineReducers({
  auth: AuthReducer,
// reducer usage
});

export const persistConfig: PersitConfig = {
  key: 'root',
  storage
  // blacklist: ['extras'],
  // transforms: [encryptStore],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const getMiddlewares = (getDefaultMiddlewares: any) => {
  if (process.env.NODE_ENV !== 'development') return getDefaultMiddlewares();
  return [...getDefaultMiddlewares(), logger];
};

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getMiddlewares
});

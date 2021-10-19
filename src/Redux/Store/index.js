import { createStore, applyMiddleware, compose } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from '../Reducers/rootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const logger = (store) => {
  return (next) => {
    return (action) => {
      // console.log("[Middleware] dispatching", action);
      const result = next(action);
      // console.log("[Middleware] next state", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const config = {
  key: 'root',
  storage: AsyncStorage,
  debug: true,
};

export const store = createStore(persistReducer(config, rootReducer), composeEnhancers(applyMiddleware(logger, thunk)));

export const persistor = persistStore(store);

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer'],
};

export const history = createBrowserHistory();

const middlewares = [routerMiddleware(history), thunk];
const persistedReducer = persistReducer(persistConfig, createRootReducer(history));

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

export const persistor = persistStore(store);

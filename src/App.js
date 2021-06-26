import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/es/integration/react';
import ReduxThunk from 'redux-thunk';
import MainNavigator from './navigation/MainNavigator';
import rootReducer from './redux/index';

export default App = () => {
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [],
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));

  const persistedStore = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={null}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
};

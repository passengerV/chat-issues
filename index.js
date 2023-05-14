/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {App} from './src';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './src/store';

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Main);

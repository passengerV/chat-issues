import React from 'react';
import {Navigation} from './navigation';
import {NavigationContainer} from '@react-navigation/native';

export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

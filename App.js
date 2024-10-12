import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import BackgroundWrapper from './components/UI/BackgroundWrapper';
import StackNavigator from './navigation/StackNavigator';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BackgroundWrapper>
          <StackNavigator />
        </BackgroundWrapper>
      </NavigationContainer>
    </Provider>
  );
}

import 'react-native-gesture-handler';
import * as React from 'react';
//components 
import { Onboarding, Welcome } from "./src/authentification/Authentification";
// navigation 

import { createStackNavigator } from '@react-navigation/stack';
import { LoadAssets } from './src/components';

const AuthentificationStack = createStackNavigator();

const AuthentificationNavigator = () => {
  return (<AuthentificationStack.Navigator headerMode="none">
    <AuthentificationStack.Screen name="Onboarding" component={Onboarding} />
    <AuthentificationStack.Screen name="Welcome" component={Welcome} />
  </AuthentificationStack.Navigator>)
}

// fonts 
const fonts={
  "SFProText-Bold": require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  "SFProText-SemiBold": require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
  "SFProText-Regular": require('./assets/fonts/SF-Pro-Text-Regular.otf')
}

export default function App() {
  return (
    <LoadAssets {...{fonts}}>
        <AuthentificationNavigator />
    </LoadAssets>
  );
}
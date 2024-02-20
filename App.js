// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './screens/login';
import signup from './screens/signup';
import Login from './screens/login';
import SignUp from './screens/signup';
import HomePage from './screens/homepage';
import Main from './screens/main';
import googleauth from './screens/googleauth';
import GoogleAuth from './screens/googleauth';
import GetNews from './screens/GetNews';
import WebViewComponent from './screens/Components/WebView';
import GoogleSignOutButton from './screens/googlesignout'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="GoogleAuth" component={GoogleAuth} />
      <Stack.Screen name="GoogleSignOut" component={GoogleSignOutButton} />
      <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="GetNews" component={GetNews} />
        <Stack.Screen name="WebView" component={WebViewComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
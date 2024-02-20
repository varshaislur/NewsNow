import React from 'react';
import { View, Button } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


const SignOutButton = ({navigation}) => {
  async function googleSignOut() {
    try {
      await GoogleSignin.signOut();
      console.log('User signed out');
      navigation.navigate('Login')
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View>
      <Button color='#04364A' onPress={googleSignOut} title="Google Sign Out" />
    </View>
  );
};

export default SignOutButton;

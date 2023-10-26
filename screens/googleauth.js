import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '1047293324398-p21lqfv90jb66uv6q18rfckac5mffhlq.apps.googleusercontent.com',
});

const GoogleAuth = ({ navigation }) => {
  const [signingIn, setSigningIn] = useState(false);
  const [cancelSignin, setCancelSignin] = useState(false);

  async function onGoogleButtonPress() {
    if (signingIn) {
      // A sign-in operation is already in progress, allow user to cancel
      setCancelSignin(true);
      return;
    }

    setSigningIn(true);
    setCancelSignin(false);

    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const { idToken } = await GoogleSignin.signIn();

      // Check if the user has requested to cancel
      if (cancelSignin) {
        console.log('Sign-in was canceled by the user.');
        setSigningIn(false);
        return;
      }

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      await auth()
        .signInWithCredential(googleCredential);

      console.log('Signed in with Google!');
      navigation.navigate('main');
    } catch (error) {
      console.log('App error', error);
    } finally {
      setSigningIn(false);
    }
  }

  async function googleSignOut() {
    try {
      await GoogleSignin.signOut();
      // Remember to remove the user from your app's state as well
      console.log('User signed out');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View>
      <GoogleSigninButton
        title="Google Sign-In"
        onPress={onGoogleButtonPress}
        disabled={signingIn}
      />
      {signingIn && (
        <Button
          title="Cancel"
          onPress={() => setCancelSignin(true)}
        />
      )}
      {signingIn && <ActivityIndicator size="small" />}
      <Text></Text>
      <Button onPress={googleSignOut} title='Google Sign Out'/>
    </View>
  );
};

export default GoogleAuth;

const styles = StyleSheet.create({});

import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Button,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId: '1047293324398-p21lqfv90jb66uv6q18rfckac5mffhlq.apps.googleusercontent.com',
});

const SignInButton = ({ navigation }) => {
  const [signingIn, setSigningIn] = useState(false);
  const [cancelSignin, setCancelSignin] = useState(false);

  async function onGoogleButtonPress() {
    if (signingIn) {
      setCancelSignin(true);
      return;
    }

    setSigningIn(true);
    setCancelSignin(false);

    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const { idToken } = await GoogleSignin.signIn();

      if (cancelSignin) {
        console.log('Sign-in was canceled by the user.');
        setSigningIn(false);
        return;
      }

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);

      console.log('Signed in with Google!');
      navigation.navigate('Main');
    } catch (error) {
      console.log('App error', error);
    } finally {
      setSigningIn(false);
    }
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <TouchableOpacity onPress={onGoogleButtonPress} activeOpacity={0.5}>
        <Image
          source={require('../assets/images/googlelogo.jpg')}
          style={{
            width: 60,
            height: 60,
            borderRadius: 50,
          }}
        />
      </TouchableOpacity>
      {signingIn && (
        <Button title="Cancel" onPress={() => setCancelSignin(true)} />
      )}
      {signingIn && <ActivityIndicator size="small" />}
    </View>
  );
};

export default SignInButton;

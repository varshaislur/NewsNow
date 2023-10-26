import { StyleSheet, Text, View, Button,
  Dimensions,
  TextInput,
  TouchableOpacity, } from 'react-native'
import React,{ useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';

const SignUp = ({ navigation }) => {
  const [Email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [phoneNumber,setPhoneNumber]=useState("")

  const [EmailError,setEmailError]=useState(true)
  const [passwordError,setPasswordError]=useState(true)
  const [phoneNumberError,setPhoneNumberError]=useState(true)


  const validation = () => {
    console.warn("function sign up called");
  
    let isFormValid = true;
  
    if (!Email) {
      setEmailError(true);
      isFormValid = false; 
    } else {
      setEmailError(false);
    }
  
    if (!password) {
      setPasswordError(true);
      isFormValid = false; 
    } else {
      setPasswordError(false);
    }
  
    if (!phoneNumber) {
      setPhoneNumberError(true);
      isFormValid = false; 
    } else {
      setPhoneNumberError(false);
    }
  
    if (isFormValid) {
     
      auth()
  .createUserWithEmailAndPassword(Email, password)
  .then(() => {
    console.log('User account created & signed in!');
    navigation.navigate('main'); 
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
    }
  };
  
  
  return (
    <View>
      <LinearGradient
        colors={['indianred', 'lightpink','indianred']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          height: Dimensions.get('window').height * 0.2,

          width: '100%',
          alignItems: 'center',
          paddingTop: 40,
        }}>
        <Text style={{ color: 'white', fontSize: 31, fontWeight: 'bold' }}>
          NewsNow
        </Text>
      </LinearGradient>
      <View
        style={{
          elevation: 10,
          backgroundColor: 'white',
          borderRadius: 10,
          margin: 10,
          marginTop: -20,
          paddingVertical: 20,
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            fontSize: 19,
            fontWeight: 'bold',
            color: 'indianred',
            textAlign: 'center',
          }}>
          SIGN UP
        </Text>
        <Text style={{fontSize: 16, color: 'indianred'}}>Email</Text>
          <TextInput
          onChangeText={(text)=>setEmail(text)}
          value={Email}
            placeholder= "Email"
            placeholderTextColor="gray"
            style={{
              borderBottomColor: 'indianred',
              borderBottomWidth: 1,
              paddingVertical: 0,
              marginTop: 5,
            }}

            keyboardType="default"
          />
          {EmailError?<Text style={styles.errorfield}>The Email field cannot be left empty</Text>:null}
          <Text></Text>

          <Text style={{fontSize: 16, color: 'indianred'}}>Phone Number</Text>
          <TextInput
            placeholder="Phone Number"
            value={phoneNumber}
            placeholderTextColor="gray"
            onChangeText={(text)=>setPhoneNumber(text)}
            keyboardType="numeric"
            style={{
              borderBottomColor: 'indianred',
              borderBottomWidth: 1,
              paddingVertical: 0,
              marginTop: 5,
            }}
          //  secureTextEntry={true}
            //keyboardType="Numeric"
          />
          {phoneNumberError?<Text style={styles.errorfield}>The Phone number field cannot be left empty</Text>:null}




          <Text></Text>

          <Text style={{fontSize: 16, color: 'indianred'}}>Password</Text>
          <TextInput
            placeholder="password"
            value={password}
            placeholderTextColor="gray"
            onChangeText={(text)=>setPassword(text)}
            style={{
              borderBottomColor: 'indianred',
              borderBottomWidth: 1,
              paddingVertical: 0,
              marginTop: 5,
            }}
           secureTextEntry={true}
            keyboardType="default"
          />
          {passwordError?<Text style={styles.errorfield}>The Password field cannot be left empty</Text>:null}
        
        <Text style={{color: 'indianred', fontSize: 16, textAlign: 'right'}}>
          Forgot Password?
        </Text>
        <TouchableOpacity onPress={validation}>
  <LinearGradient
    colors={['indianred', 'lightpink','indianred']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={{
      borderRadius: 100,
      width: 150,
      alignSelf: 'center',
      alignItems: 'center',
      paddingVertical: 5,
      marginTop: 100,
      marginBottom: 10,
    }}>
    <Text style={{ color: 'white', fontSize: 19 }}>SIGN UP</Text>
  </LinearGradient>
</TouchableOpacity>
        <Text style={{color: 'indianred', fontSize: 16, textAlign: 'center'}}>
          Already have an account?{''}
          <Text style={{color:'mediumpurple'}} onPress={() => navigation.navigate('Login')}>Login</Text>
        </Text>
      </View>
    </View>
  );

}

export default SignUp

const styles = StyleSheet.create({
  errorfield:{
    color:"blue",
    fontSize:14,

  }
})
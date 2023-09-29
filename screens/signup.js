import { StyleSheet, Text, View, Button,
  Dimensions,
  TextInput,
  TouchableOpacity, } from 'react-native'
import React,{ useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';

const SignUp = ({ navigation }) => {
  const [userName,setUserName]=useState("")
  const [password,setPassword]=useState("")
  const [phoneNumber,setPhoneNumber]=useState("")

  const [UserNameError,setUserNameError]=useState(true)
  const [passwordError,setPasswordError]=useState(true)
  const [phoneNumberError,setPhoneNumberError]=useState(true)


  const validation = () => {
    console.warn("function sign up called");
  
    let isFormValid = true; // Initialize a flag to track form validation
  
    if (!userName) {
      setUserNameError(true);
      isFormValid = false; // Set the flag to false if username is empty
    } else {
      setUserNameError(false);
    }
  
    if (!password) {
      setPasswordError(true);
      isFormValid = false; // Set the flag to false if password is empty
    } else {
      setPasswordError(false);
    }
  
    if (!phoneNumber) {
      setPhoneNumberError(true);
      isFormValid = false; // Set the flag to false if phone number is empty
    } else {
      setPhoneNumberError(false);
    }
  
    if (isFormValid) {
      navigation.navigate('HomePage'); // Only navigate when the form is valid
    }
  };
  
  
  return (
    <View>
      <LinearGradient
        colors={['#42a1f5', '#03bafc', '#42c5f5']}
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
          NewsApp
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
            color: '#03bafc',
            textAlign: 'center',
          }}>
          LOGIN
        </Text>
        <Text style={{fontSize: 16, color: '#03bafc'}}>Username</Text>
          <TextInput
          onChangeText={(text)=>setUserName(text)}
            placeholder= "UserName"
            placeholderTextColor="gray"
            style={{
              borderBottomColor: '#03bafc',
              borderBottomWidth: 1,
              paddingVertical: 0,
              marginTop: 5,
            }}

            keyboardType="default"
          />
          {UserNameError?<Text style={styles.errorfield}>The field cannot be left empty</Text>:null}

          <Text style={{fontSize: 16, color: '#03bafc'}}>phoneNumber</Text>
          <TextInput
            placeholder="phoneNumber"
            placeholderTextColor="gray"
            onChangeText={(text)=>setPhoneNumber(text)}
            style={{
              borderBottomColor: '#03bafc',
              borderBottomWidth: 1,
              paddingVertical: 0,
              marginTop: 5,
            }}
          //  secureTextEntry={true}
            //keyboardType="Numeric"
          />
          {phoneNumberError?<Text style={styles.errorfield}>The field cannot be left empty</Text>:null}






          <Text style={{fontSize: 16, color: '#03bafc'}}>Password</Text>
          <TextInput
            placeholder="password"
            placeholderTextColor="gray"
            onChangeText={(text)=>setPassword(text)}
            style={{
              borderBottomColor: '#03bafc',
              borderBottomWidth: 1,
              paddingVertical: 0,
              marginTop: 5,
            }}
           secureTextEntry={true}
            keyboardType="default"
          />
          {passwordError?<Text style={styles.errorfield}>The field cannot be left empty</Text>:null}
        
        <Text style={{color: '#03bafc', fontSize: 16, textAlign: 'right'}}>
          Forgot Password?
        </Text>
        <TouchableOpacity onPress={validation}>
  <LinearGradient
    colors={['#42a1f5', '#03bafc', '#42c5f5']}
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
    <Text style={{ color: 'white', fontSize: 19 }}>SignUp</Text>
  </LinearGradient>
</TouchableOpacity>
        <Text style={{color: '#03bafc', fontSize: 16, textAlign: 'center'}}>
          Already have an account?{''}
          <Text onPress={() => navigation.navigate('Login')}>Login</Text>
        </Text>
      </View>
    </View>
  );

}

export default SignUp

const styles = StyleSheet.create({
  errorfield:{
    color:"red",
    fontSize:14,

  }
})
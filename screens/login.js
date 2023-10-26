import { StyleSheet, Text, View, Button,
  Dimensions,
  TextInput,
  TouchableOpacity,Image } from 'react-native'
import React,{ useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import GoogleAuth from './googleauth';
import Icon from 'react-native-vector-icons/Ionicons';

const Login = ({ navigation }) => {
  const [Email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [EmailError,setEmailError]=useState(false)
  const [passwordError,setPasswordError]=useState(false)


  let validation=()=>{
    console.warn("function login called")
    let isFormValid=true;
    
    if(!Email){
        setEmailError(true)
        isFormValid=false
    }
    else{
      setEmailError(false)
      isFormValid=true
    }
    if(!password){
      setPasswordError(true)
      isFormValid=false

    }else{
      setPasswordError(false)
      isFormValid=true
    }
  

  
      if(isFormValid){
      auth()
  .signInWithEmailAndPassword(Email, password)
  .then(() => {
    console.log('signed in!');
    navigation.navigate('main'); 
  })
  .catch(error => {
    // if (error.code === 'auth/email-already-in-use') {
    //   console.log('That email address is already in use!');
    // }

    // if (error.code === 'auth/invalid-email') {
    //   console.log('That email address is invalid!');
    // }

    console.error(error);
  });
      }
      
  

  }
  
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
          LOGIN
        </Text>
        <Text></Text>
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
          {EmailError?<Text style={styles.errorfield}>the Email field must not be left empty</Text>:null}



          <Text></Text>
          <Text></Text>



          <Text style={{fontSize: 16, color: 'indianred'}}>Password</Text>
          <TextInput
            placeholder="password"
            placeholderTextColor="gray"
            onChangeText={(text)=>setPassword(text)}
            value={password}
            style={{
              borderBottomColor: 'indianred',
              borderBottomWidth: 1,
              paddingVertical: 0,
              marginTop: 5,
            }}
            secureTextEntry={true}
            keyboardType="default"
          />
          {passwordError?<Text style={styles.errorfield}>the password field must not be left empty</Text>:null}
        
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
    <Text style={{ color: 'white', fontSize: 19 }}>LOGIN</Text>
  </LinearGradient>
</TouchableOpacity>
        <Text style={{color: 'indianred', fontSize: 16, textAlign: 'center'}}>
          Don't have an account?{''}
          <Text style={{color:'mediumpurple'}} onPress={() => navigation.navigate('SignUp')}>Signup</Text>
        </Text>
        {/* <Text style={{color:'mediumpurple'}} onPress={() => navigation.navigate('GoogleAuth')}>google sign in</Text> */}
        <Text></Text>
        <GoogleAuth navigation={navigation} />
      </View>
    </View>
  );

}

export default Login

const styles = StyleSheet.create({
  errorfield:{
    color:'blue',
    fontSize:14,

  },
  button: {
    backgroundColor: 'indianred',
    borderRadius: 5,
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

})
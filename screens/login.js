import { StyleSheet, Text, View, Button,
  Dimensions,
  TextInput,
  TouchableOpacity, } from 'react-native'
import React,{ useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';

const Login = ({ navigation }) => {
  const [userName,setUserName]=useState("")
  const [password,setPassword]=useState("")
  const [UserNameError,setUserNameError]=useState(false)
  const [passwordError,setPasswordError]=useState(false)


  let validation=()=>{
    console.warn("function login called")
    let isFormValid=true;
    
    if(!userName){
        setUserNameError(true)
        isFormValid=false
    }
    else{
      setUserNameError(false)
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
      navigation.navigate('HomePage')
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
            color: 'indianred',
            textAlign: 'center',
          }}>
          LOGIN
        </Text>
        <Text></Text>
        <Text style={{fontSize: 16, color: 'indianred'}}>Username</Text>
          <TextInput
          onChangeText={(text)=>setUserName(text)}
            placeholder= "UserName"
            placeholderTextColor="gray"
            style={{
              borderBottomColor: 'indianred',
              borderBottomWidth: 1,
              paddingVertical: 0,
              marginTop: 5,
            }}

            keyboardType="default"
          />
          {UserNameError?<Text style={styles.errorfield}>the username field must not be left empty</Text>:null}



          <Text></Text>
          <Text></Text>



          <Text style={{fontSize: 16, color: 'indianred'}}>Password</Text>
          <TextInput
            placeholder="password"
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
      </View>
    </View>
  );

}

export default Login

const styles = StyleSheet.create({
  errorfield:{
    color:'blue',
    fontSize:14,

  }

})
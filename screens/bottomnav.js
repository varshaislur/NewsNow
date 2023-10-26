import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomePage from './homepage'
import explorepage from './explorepage'
import Icon from 'react-native-vector-icons/Ionicons'




const Bottom=createBottomTabNavigator()
const Bottomnav = () => {
  return (
     <Bottom.Navigator>
        <Bottom.Screen name='HomeScreen'component={HomePage} options={{headerShown:true,tabBarIcon:({color,size})=>(
         <Icon name="home" size={30} />
         )
  
  }} />
        <Bottom.Screen name='explore' component={explorepage} options={{headerShown:true,tabBarIcon:({color,size})=>(
         <Icon name="search" size={30} />
         )
  
  }}/>
     </Bottom.Navigator>
    
  )
}

export default Bottomnav

const styles = StyleSheet.create({})
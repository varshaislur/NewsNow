import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomePage from './homepage'
import ExplorePage from './explorepage'
import Icon from 'react-native-vector-icons/Ionicons'
import favourites from './favourites'




const Bottom=createBottomTabNavigator()
const Bottomnav = () => {
  return (
     <Bottom.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle:{backgroundColor: '#04364A'},
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      overflow: "hidden",
      tabBarActiveTintColor:"#DAFFFB",
      tabBarInactiveTintColor:"grey",
     }}>
        <Bottom.Screen name='HomeScreen'component={HomePage} options={{headerShown:true,headerStyle:{backgroundColor:"#04364A"},headerTintColor: '#fff',headerTitle:"Home",
          headerTitleStyle: {
            fontWeight: 'bold',
          },tabBarIcon:({color,size})=>(
         <Icon name="home" color={color} size={30} />
         )
  
  }} />
        <Bottom.Screen name='explore' component={ExplorePage} options={{headerShown:true,headerStyle:{backgroundColor:"#04364A"},headerTintColor: '#fff',headerTitle:"Explore",
          headerTitleStyle: {
            fontWeight: 'bold',
          },tabBarIcon:({color,size})=>(
         <Icon name="search" color={color} size={30} />
         )
  
  }}/>
        <Bottom.Screen name='Favourites'component={favourites} options={{headerShown:true,headerStyle:{backgroundColor:"#04364A"},headerTintColor: '#fff',headerTitle:"Home",
          headerTitleStyle: {
            fontWeight: 'bold',
          },tabBarIcon:({color,size})=>(
         <Icon name="heart" color={color} size={30} />
         )
  
  }} />
     </Bottom.Navigator>
    
  )
}

export default Bottomnav

const styles = StyleSheet.create({})
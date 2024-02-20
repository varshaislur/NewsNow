import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Categories from './Components/Categories';
import TrendingNews from './Components/TrendingNews';
import TrendingNews2 from './Components/TrendingNews2';
import SignOutButton from './googlesignout';


const HomePage = ({navigation}) => {
  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=2705a106d5b74e3a8283ce344c47e027")
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // The empty dependency array ensures this effect runs once, like componentDidMount
  return (
   <View><Text></Text>
   <Categories/>
   <TrendingNews/>
   <SignOutButton navigation={navigation}/>
   </View>
  );
};

export default HomePage;

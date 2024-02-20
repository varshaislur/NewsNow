import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {API_KEY} from '../secrets/secrets.js'

const TrendingNews2 = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`);
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, []);

  const navigation = useNavigation();

  return (
    <View>
      {news.length === 0 ? (
        <ActivityIndicator color="black" size="large" />
      ) : (
        <ScrollView >
          {news.map((newsItem, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate('WebView', { url: newsItem.url })}>
              <View style={{ margin: 10 }}>
                <Image
                  source={{ uri: `${newsItem.urlToImage}` }}
                  style={{ height: 200, width: 200, borderRadius: 10 , paddingLeft:50, paddingRight:50}}
                />
                <Text style={{ width: 200, textAlign: 'justify' }}>
                  {newsItem.title}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default TrendingNews2;

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, View, Image, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import API_KEY from './secrets/secrets';

const ExplorePage = () => {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const deviceHeight = Dimensions.get('window').height;
  const deviceWidth = Dimensions.get('window').width;

  // Use an object to store liked status for each news item
  const [likedStatus, setLikedStatus] = useState({});

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
        const data = await response.json();

        // Initialize likedStatus for each news item
        const initialLikedStatus = {};
        data.articles.forEach((item) => {
          initialLikedStatus[item.title] = false;
        });

        setNews(data.articles);
        setFilteredNews(data.articles);
        setLikedStatus(initialLikedStatus);
        console.log("filtered news executed");
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, []);

  const navigation = useNavigation();
  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = news.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    console.log(filtered);
    setFilteredNews(filtered);
  };

  const addtofavourites = (title) => {
    // Toggle liked status for the clicked news item
    setLikedStatus((prevLikedStatus) => ({
      ...prevLikedStatus,
      [title]: !prevLikedStatus[title],
    }));
  };

  return (
    <View>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          padding: 8,
          width: deviceWidth - 20,
          borderRadius: 5,
          marginVertical: 10,
          marginHorizontal: 10,
        }}
        placeholder="Search news..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      {filteredNews.length === 0 ? (
        <ActivityIndicator color="black" size="large" />
      ) : (
        <ScrollView>
          {filteredNews.map((newsItem, index) => (
            <View
              key={index}
              style={{
                margin: 40,
                backgroundColor: 'white',
                borderRadius: 8,
                paddingVertical: 45,
                paddingHorizontal: 25,
                width: '80%',
                marginVertical: 10,
                elevation: 20,
                shadowColor: '#52006A',
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('WebView', { url: newsItem.url })
                }
              >
                <Image
                  source={{ uri: `${newsItem.urlToImage}` }}
                  style={{
                    height: 250,
                    width: 250,
                    borderRadius: 10,
                    marginLeft: 0,
                  }}
                />
                <Text style={{ width: 200, textAlign: 'justify', marginLeft: 0 }}>
                  {newsItem.title}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => addtofavourites(newsItem.title)}>
                {likedStatus[newsItem.title] ? (
                  <Icon size={24} color="red" name="heart" />
                ) : (
                  <Icon size={24} color="black" name="heart" />
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default ExplorePage;

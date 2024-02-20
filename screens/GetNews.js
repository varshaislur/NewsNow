import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const GetNews = ({ navigation, route }) => {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    navigation.setOptions({
      title: route.params.category,
    });

    fetch(
      `https://newsapi.org/v2/top-headlines?category=${route.params.category}&country=in&apiKey=2705a106d5b74e3a8283ce344c47e027`
    )
      .then((res) => res.json())
      .then((response) => {
        setNews(response.articles);
        setFilteredNews(response.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [navigation, route.params.category]);

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = news.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredNews(filtered);
  };

  const renderItem = ({ item, index }) => (
    item.urlToImage && (
      <TouchableOpacity
        key={index}
        onPress={() =>
          navigation.navigate('WebView', {
            url: item.url,
          })
        }
      >
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 10,
            elevation: 4,
            width: deviceWidth - 30,
            marginVertical: 7,
          }}
        >
          <Image
            source={{ uri: `${item.urlToImage}` }}
            style={{ height: 100, width: 100, borderRadius: 10 }}
          />
          <Text
            style={{
              width: deviceWidth - 130,
              paddingLeft: 10,
              paddingTop: 5,
            }}
          >
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    )
  );

  return (
    <View style={{ alignItems: 'center' }}>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          padding: 8,
          width: deviceWidth - 20,
          borderRadius: 5,
          marginVertical: 10,
        }}
        placeholder="Search news..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {news.length === 0 ? (
        <ActivityIndicator
          style={{
            height: deviceHeight,
            width: deviceWidth,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          size="large"
          color="black"
        />
      ) : (
        <FlatList
          data={filteredNews}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${index}`}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default GetNews;

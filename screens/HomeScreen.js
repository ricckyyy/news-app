import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList, SafeAreaView } from 'react-native'

import ListItem from '../components/ListItem'
import Constants from 'expo-constants'
import axios from 'axios'

const URL = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 0
  },
})

export default HomeScreen = props => {
  const { navigation } = props

  const [articles, setArticles] = useState([])
  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL)
      setArticles(response.data.articles)
      // console.log(response)
    } catch (error) {
      // console.error(error)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            ImageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() => navigation.navigate('Article', { article: item })}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  )
}

import React from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"

const styles = StyleSheet.create({
  itemcontainer: {
    height: 100,
    width: "100 %",
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
  },
  left: {
    width: 100,
  },
  right: {
    flex: 1,
    padding: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  subtext: {
    fontSize: 12,
    color: "gray",
  },
})

const ListItem = ({ ImageUrl, title, author, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemcontainer} onPress={onPress}>
      <View style={styles.left}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: ImageUrl,
          }}
        />
      </View>
      <View style={styles.right}>
        <Text numberOfLines={3} style={styles.text}>
          {title}
        </Text>
        <Text style={styles.subtext}>{author}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ListItem

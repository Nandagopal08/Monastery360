import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Linking,
} from "react-native";

const tours = [
  {
    id: "1",
    title: "Rumtek Monastery 360° Tour",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Rumtek_Monastery.jpg/320px-Rumtek_Monastery.jpg",
    url: "https://www.youtube.com/watch?v=9No-FiEInLA", // replace with actual 360° video
  },
  {
    id: "2",
    title: "Pemayangtse Monastery Virtual Tour",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Pemayangtse_Monastery.jpg/320px-Pemayangtse_Monastery.jpg",
    url: "https://www.youtube.com/watch?v=oUFJJNQGwhk",
  },
  {
    id: "3",
    title: "Tashiding Monastery Walkthrough",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tashiding_Monastery.jpg/320px-Tashiding_Monastery.jpg",
    url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
  },
];

export default function TourScreen() {
  const renderTour = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <Text style={styles.title}>{item.title}</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => Linking.openURL(item.url)}
      >
        <Text style={styles.btnText}>🎥 Watch Tour</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Virtual Monastery Tours</Text>
      <FlatList
        data={tours}
        keyExtractor={(item) => item.id}
        renderItem={renderTour}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#eef7f2",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#2d6a4f",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  thumbnail: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#333",
  },
  btn: {
    backgroundColor: "#1d3557",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

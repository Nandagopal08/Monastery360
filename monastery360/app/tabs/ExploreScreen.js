import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const monasteries = [
  {
    id: "1",
    name: "Rumtek Monastery",
    description:
      "One of the largest and most famous monasteries in Sikkim, built in the 16th century.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Rumtek_Monastery_Sikkim_India.jpg",
  },
  {
    id: "2",
    name: "Pemayangtse Monastery",
    description:
      "A 17th-century monastery near Pelling, known for its ancient architecture and sculptures.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Pemyangtse_monastery.jpg",
  },
  {
    id: "3",
    name: "Phensang Monastery",
    description:
      "Located in Gangtok, this monastery hosts vibrant festivals and spiritual gatherings.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Phensang_Monastery_Sikkim.jpg",
  },
];

export default function ExploreScreen() {
  const renderMonastery = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Add to Itinerary</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { backgroundColor: "#8e44ad" }]}>
          <Text style={styles.btnText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Monasteries</Text>
      <FlatList
        data={monasteries}
        keyExtractor={(item) => item.id}
        renderItem={renderMonastery}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fdf6e3",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
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
  image: {
    width: "100%",
    height: 160,
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 10,
    color: "#b5651d",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  buttons: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  btn: {
    flex: 1,
    backgroundColor: "#d97b5f",
    padding: 10,
    marginRight: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});

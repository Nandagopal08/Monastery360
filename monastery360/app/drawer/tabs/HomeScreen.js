import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Namaste</Text>
      <Text style={styles.subtitle}>Welcome to Sikkim’s Monasteries</Text>

      <View style={styles.grid}>
        <TouchableOpacity
          style={[styles.card, { backgroundColor: "#d97b5f" }]}
          onPress={() => navigation.navigate("Explore")}
        >
          <Text style={styles.cardText}>Explore Monasteries</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: "#e6a04e" }]}
          onPress={() => navigation.navigate("Map")}
        >
          <Text style={styles.cardText}>Interactive Map</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: "#4da6ff" }]}
          onPress={() => alert("Audio Tour coming soon")}
        >
          <Text style={styles.cardText}>Audio Tour</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: "#6bb36b" }]}
          onPress={() => navigation.navigate("Archive")}
        >
          <Text style={styles.cardText}>Digital Archive</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: "#b5651d" }]}
          onPress={() => navigation.navigate("Events")}
        >
          <Text style={styles.cardText}>Festivals & Events</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: "#8e44ad" }]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.cardText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdf6e3",
    paddingVertical: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    color: "#555",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: "40%",
    height: 120,
    margin: 10,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  cardText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

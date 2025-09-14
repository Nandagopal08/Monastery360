import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const events = [
  {
    id: "1",
    title: "Losar Festival",
    date: "Feb 10, 2025",
    description:
      "Tibetan New Year celebrated with traditional dances, rituals, and prayers at Rumtek Monastery.",
  },
  {
    id: "2",
    title: "Saga Dawa",
    date: "Jun 12, 2025",
    description:
      "A sacred month honoring Buddha’s birth, enlightenment, and death, observed at all major monasteries.",
  },
  {
    id: "3",
    title: "Pang Lhabsol",
    date: "Sep 18, 2025",
    description:
      "Festival unique to Sikkim, paying homage to Mount Khangchendzonga with mask dances at Pemayangtse.",
  },
];

export default function EventsScreen() {
  const renderEvent = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => alert(`Saved ${item.title} to calendar`)}
      >
        <Text style={styles.btnText}>Save to Calendar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Festivals & Events</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={renderEvent}
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
  header: {
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
  date: {
    fontSize: 14,
    fontWeight: "600",
    color: "#d97b5f",
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#b5651d",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginVertical: 8,
  },
  btn: {
    backgroundColor: "#4da6ff",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});

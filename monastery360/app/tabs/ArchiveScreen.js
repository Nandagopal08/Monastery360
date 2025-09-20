import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const archives = [
  {
    id: "1",
    title: "Ancient Manuscripts of Rumtek",
    description: "Rare Buddhist texts preserved at Rumtek Monastery.",
    file: "rumtek_texts.pdf",
  },
  {
    id: "2",
    title: "Pemayangtse Wooden Sculptures",
    description:
      "Detailed woodwork representing Buddhist cosmology, dating back centuries.",
    file: "pemayangtse_sculptures.pdf",
  },
  {
    id: "3",
    title: "Phensang Monastery Mural Collection",
    description:
      "Traditional wall paintings depicting Buddhist deities and teachings.",
    file: "phensang_murals.pdf",
  },
];

export default function ArchiveScreen() {
  const renderArchive = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => alert(`Opening ${item.file}...`)}
        >
          <Text style={styles.btnText}>View</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, { backgroundColor: "#6bb36b" }]}
          onPress={() => alert(`Downloading ${item.file}...`)}
        >
          <Text style={styles.btnText}>Download</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Digital Archive</Text>
      <FlatList
        data={archives}
        keyExtractor={(item) => item.id}
        renderItem={renderArchive}
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

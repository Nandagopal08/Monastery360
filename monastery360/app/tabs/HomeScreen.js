import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import MapScreen from "../MapScreen";

export default function HomeScreen() {
  const [showMap, setShowMap] = useState(false);

  if (showMap) {
    return <MapScreen />;
  }

  const menuItems = [
    {
      id: 1,
      title: "Explore Monasteries",
      icon: "business",
      color: "#D2691E",
      onPress: () => alert("Explore coming soon")
    },
    {
      id: 2,
      title: "Interactive Monastery Map",
      icon: "location",
      color: "#F4A460",
      onPress: () => setShowMap(true)
    },
    {
      id: 3,
      title: "Digital Archive",
      icon: "library",
      color: "#CD853F",
      onPress: () => alert("Digital Archive coming soon")
    },
    {
      id: 4,
      title: "360° Virtual Tours",
      icon: "camera",
      color: "#4682B4",
      onPress: () => alert("Virtual Tours coming soon")
    },
    {
      id: 5,
      title: "Weather",
      icon: "partly-sunny",
      color: "#FFD700",
      onPress: () => alert("Weather coming soon")
    },
    {
      id: 6,
      title: "Cultural Calendar",
      icon: "calendar",
      color: "#CD853F",
      onPress: () => alert("Cultural Calendar coming soon")
    },
    {
      id: 7,
      title: "AI Monk Chatbot",
      icon: "chatbubble-ellipses",
      color: "#87CEEB",
      onPress: () => alert("AI Chatbot coming soon")
    }
  ];

  return (
    <View style={styles.container}>
      {/* Decorative Header */}
      <View style={styles.headerContainer}>
        <View style={styles.cloudShape}>
          <Text style={styles.namasteText}>NAMASTE</Text>
        </View>
      </View>

      {/* Menu Items */}
      <ScrollView contentContainerStyle={styles.menuContainer} showsVerticalScrollIndicator={false}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.menuItem, { backgroundColor: item.color }]}
            onPress={item.onPress}
            activeOpacity={0.8}
          >
            <View style={styles.menuItemContent}>
              <View style={styles.iconContainer}>
                <Ionicons name={item.icon} size={24} color="#FFD700" />
              </View>
              <Text style={styles.menuItemText}>{item.title}</Text>
            </View>
            <View style={[styles.menuItemShadow, { backgroundColor: item.color }]} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B22222", // Deep red background
  },
  headerContainer: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
    zIndex: 2,
  },
  cloudShape: {
    backgroundColor: "#4682B4", // Steel blue
    paddingHorizontal: 60,
    paddingVertical: 40,
    borderRadius: 50,
    // Create cloud-like shape with additional styling
    position: 'relative',
  },
  namasteText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    letterSpacing: 2,
  },
  menuContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
    flexGrow: 1,
  },
  menuItem: {
    marginBottom: 15,
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    zIndex: 2,
    position: 'relative',
  },
  iconContainer: {
    marginRight: 15,
    width: 30,
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2F4F4F', // Dark slate gray
    flex: 1,
  },
  menuItemShadow: {
    position: 'absolute',
    bottom: -8,
    left: 8,
    right: -8,
    height: '100%',
    borderRadius: 15,
    opacity: 0.3,
    zIndex: 1,
  },
});
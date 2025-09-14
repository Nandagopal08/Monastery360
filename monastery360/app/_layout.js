import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case "index":
              iconName = "home";
              break;
            case "ExploreScreen":
              iconName = "book";
              break;
            case "MapScreen":
              iconName = "map";
              break;
            case "ArchiveScreen":
              iconName = "albums";
              break;
            case "EventsScreen":
              iconName = "calendar";
              break;
            case "TourScreen":
              iconName = "videocam";
              break;
            case "ProfileScreen":
              iconName = "person";
              break;
            default:
              iconName = "ellipse";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#2d6a4f",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="ExploreScreen" options={{ title: "Explore" }} />
      <Tabs.Screen name="MapScreen" options={{ title: "Map" }} />
      <Tabs.Screen name="ArchiveScreen" options={{ title: "Archive" }} />
      <Tabs.Screen name="EventsScreen" options={{ title: "Events" }} />
      <Tabs.Screen name="TourScreen" options={{ title: "Tours" }} />
      <Tabs.Screen name="ProfileScreen" options={{ title: "Profile" }} />
    </Tabs>
  );
}

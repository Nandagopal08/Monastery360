import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1E90FF",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({color, size}) => <Icon name="home-outline" size={size} color={color}/> }} />
      <Tabs.Screen name="explore" options={{ title: "Explore", tabBarIcon: ({color, size}) => <Icon name="search-outline" size={size} color={color}/> }} />
      <Tabs.Screen name="map" options={{ title: "Map", tabBarIcon: ({color, size}) => <Icon name="map-outline" size={size} color={color}/> }} />
      <Tabs.Screen name="archive" options={{ title: "Archive", tabBarIcon: ({color, size}) => <Icon name="archive-outline" size={size} color={color}/> }} />
      <Tabs.Screen name="events" options={{ title: "Events", tabBarIcon: ({color, size}) => <Icon name="calendar-outline" size={size} color={color}/> }} />
      <Tabs.Screen name="tour" options={{ title: "Tour", tabBarIcon: ({color, size}) => <Icon name="compass-outline" size={size} color={color}/> }} />
      <Tabs.Screen name="profile" options={{ title: "Profile", tabBarIcon: ({color, size}) => <Icon name="person-outline" size={size} color={color}/> }} />
    </Tabs>
  );
}

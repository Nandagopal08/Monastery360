import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Import your screens
import HomeScreen from "./screens/HomeScreen";
import ExploreScreen from "./screens/ExploreScreen";
import MapScreen from "./screens/MapScreen";
import ArchiveScreen from "./screens/ArchiveScreen";
import EventsScreen from "./screens/EventsScreen";
import TourScreen from "./screens/TourScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Home") iconName = "home";
            else if (route.name === "Explore") iconName = "book";
            else if (route.name === "Map") iconName = "map";
            else if (route.name === "Archive") iconName = "albums";
            else if (route.name === "Events") iconName = "calendar";
            else if (route.name === "Tours") iconName = "videocam";
            else if (route.name === "Profile") iconName = "person";

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#2d6a4f",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Archive" component={ArchiveScreen} />
        <Tab.Screen name="Events" component={EventsScreen} />
        <Tab.Screen name="Tours" component={TourScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

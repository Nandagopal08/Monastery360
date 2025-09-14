import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Import your screens (from app folder)
import HomeScreen from "./app/HomeScreen";
import ExploreScreen from "./app/ExploreScreen";
import MapScreen from "./app/MapScreen";
import ArchiveScreen from "./app/ArchiveScreen";
import EventsScreen from "./app/EventsScreen";
import TourScreen from "./app/TourScreen";
import ProfileScreen from "./app/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case "Home":
                iconName = "home";
                break;
              case "Explore":
                iconName = "book";
                break;
              case "Map":
                iconName = "map";
                break;
              case "Archive":
                iconName = "albums";
                break;
              case "Events":
                iconName = "calendar";
                break;
              case "Tours":
                iconName = "videocam";
                break;
              case "Profile":
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

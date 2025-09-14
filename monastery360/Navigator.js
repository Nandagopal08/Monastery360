// Navigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Import your screens
import HomeScreen from "./app/HomeScreen";
import ExploreScreen from "./app/ExploreScreen";
import MapScreen from "./app/MapScreen";
import ArchiveScreen from "./app/ArchiveScreen";
import EventsScreen from "./app/EventsScreen";
import TourScreen from "./app/TourScreen";
import ProfileScreen from "./app/ProfileScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Archive" component={ArchiveScreen} />
      <Tab.Screen name="Events" component={EventsScreen} />
      <Tab.Screen name="Tour" component={TourScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Navigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
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
const Drawer = createDrawerNavigator();

// Bottom Tabs → Home, Explore, Archive, Profile
function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Archive" component={ArchiveScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// Drawer → Extra Screens: Map, Events, Tour
function DrawerMenu() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="MainTabs"
        component={BottomTabs}
        options={{ title: "Main" }}
      />
      <Drawer.Screen name="Map" component={MapScreen} />
      <Drawer.Screen name="Events" component={EventsScreen} />
      <Drawer.Screen name="Tour" component={TourScreen} />
    </Drawer.Navigator>
  );
}

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={DrawerMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

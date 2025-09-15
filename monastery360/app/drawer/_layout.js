import React from "react";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{ headerShown: false }}>
      {/* Main tabs */}
      <Drawer.Screen name="tabs" options={{ title: "Main" }} />
      {/* Extra screens */}
      <Drawer.Screen name="MapScreen" options={{ title: "Map" }} />
      <Drawer.Screen name="EventsScreen" options={{ title: "Events" }} />
      <Drawer.Screen name="TourScreen" options={{ title: "Tours" }} />
    </Drawer>
  );
}

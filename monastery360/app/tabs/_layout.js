// app/drawer/tabs/_layout.js
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef } from "react";
import { TouchableOpacity } from "react-native";
import BottomMenu from "../components/BottomMenu";

export default function TabsLayout() {
  const bottomSheetRef = useRef(null);

  return (
    <>
      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            switch (route.name) {
              case "HomeScreen":
                iconName = "home";
                break;
              case "ExploreScreen":
                iconName = "book";
                break;
              case "ArchiveScreen":
                iconName = "albums";
                break;
              case "ProfileScreen":
                iconName = "person";
                break;
              case "Menu":
                iconName = "menu";
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
        <Tabs.Screen name="HomeScreen" options={{ title: "Home" }} />
        <Tabs.Screen name="ExploreScreen" options={{ title: "Explore" }} />
        <Tabs.Screen name="ArchiveScreen" options={{ title: "Archive" }} />
        <Tabs.Screen name="ProfileScreen" options={{ title: "Profile" }} />

        {/* Fake Menu Tab → opens Bottom Sheet */}
        <Tabs.Screen
          name="Menu"
          options={{
            title: "More",
            tabBarButton: (props) => (
              <TouchableOpacity {...props} onPress={() => bottomSheetRef.current?.expand()} />
            ),
          }}
        />
      </Tabs>

      {/* Bottom Popup Menu */}
      <BottomMenu bottomSheetRef={bottomSheetRef} />
    </>
  );
}

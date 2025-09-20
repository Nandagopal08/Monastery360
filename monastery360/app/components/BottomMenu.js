// app/components/BottomMenu.js
import React, { useMemo, useCallback, forwardRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// Using forwardRef so parent can pass ref directly
const BottomMenu = forwardRef((props, ref) => {
  const snapPoints = useMemo(() => ["25%", "45%"], []);
  const router = useRouter();

  const handleNavigate = useCallback(
    (path) => {
      ref?.current?.close();
      router.push(path);
    },
    [ref, router]
  );

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
      backgroundStyle={styles.sheetBackground}
    >
      <View style={styles.container}>
        <MenuItem
          icon="map"
          label="Map"
          onPress={() => handleNavigate("/MapScreen")}
        />
        <MenuItem
          icon="calendar"
          label="Events"
          onPress={() => handleNavigate("/EventsScreen")}
        />
        <MenuItem
          icon="videocam"
          label="Tours"
          onPress={() => handleNavigate("/TourScreen")}
        />
        <MenuItem
          icon="person"
          label="Profile"
          onPress={() => handleNavigate("/ProfileScreen")}
        />
      </View>
    </BottomSheet>
  );
});

// Reusable menu item component
function MenuItem({ icon, label, onPress }) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Ionicons name={icon} size={22} color="#2d6a4f" style={styles.icon} />
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  sheetBackground: {
    backgroundColor: "#f8f9fa",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
  },
  icon: {
    marginRight: 12,
  },
  text: {
    fontSize: 18,
    color: "#2d6a4f",
    fontWeight: "500",
  },
});

export default BottomMenu;

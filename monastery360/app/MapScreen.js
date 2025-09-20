// app/MapScreen.js
import React from "react";
import { Platform, View, Text, StyleSheet, Dimensions } from "react-native";

// Sample Monasteries Data
const monasteries = [
  {
    id: "1",
    name: "Rumtek Monastery",
    latitude: 27.3255,
    longitude: 88.6065,
    description: "The largest monastery in Sikkim, also known as Dharma Chakra Centre.",
  },
  {
    id: "2",
    name: "Pemayangtse Monastery",
    latitude: 27.3038,
    longitude: 88.2346,
    description: "One of the oldest monasteries, near Pelling, with amazing mountain views.",
  },
  {
    id: "3",
    name: "Phensang Monastery",
    latitude: 27.3731,
    longitude: 88.6062,
    description: "Built in 1721, located north of Gangtok and hosts an annual festival.",
  },
];

export default function MapScreen() {
  // ✅ Web version (Leaflet)
  if (Platform.OS === "web") {
    // Import leaflet CSS only for web
    require("leaflet/dist/leaflet.css");
    const { MapContainer, TileLayer, Marker, Popup } = require("react-leaflet");

    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <MapContainer
          center={[27.4, 88.6]}
          zoom={9}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {monasteries.map((monastery) => (
            <Marker
              key={monastery.id}
              position={[monastery.latitude, monastery.longitude]}
            >
              <Popup>
                <strong>{monastery.name}</strong>
                <br />
                {monastery.description}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    );
  }

  // Mobile (iOS/Android) version (react-native-maps)
  const MapView = require("react-native-maps").default;
  const { Marker, Callout } = require("react-native-maps");

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 27.4,
          longitude: 88.6,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
      >
        {monasteries.map((monastery) => (
          <Marker
            key={monastery.id}
            coordinate={{
              latitude: monastery.latitude,
              longitude: monastery.longitude,
            }}
          >
            <Callout>
              <View style={{ width: 200 }}>
                <Text style={{ fontWeight: "bold" }}>{monastery.name}</Text>
                <Text>{monastery.description}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

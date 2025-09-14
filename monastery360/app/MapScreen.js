import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";

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
            title={monastery.name}
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

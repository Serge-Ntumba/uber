import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { mapStyle } from "../global/mapStyle";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default class MapComponent extends Component {
  render() {
    return (
      <View>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          customMapStyle={mapStyle}

          // initialRegion={{
          //   ...carsAround[0],
          //   latitudeDelta: -4.395857,
          //   longitudeDelta: 15.341852,
          // }}
        >
          {
            //carsAroundMine
          }
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

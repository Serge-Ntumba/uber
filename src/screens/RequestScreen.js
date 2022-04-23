import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, parameters } from "../global/styles";
import MapComponent from "../components/MapComponent";

const RequestScreen = () => {
  return (
    <View style={styles.container}>
      <MapComponent />
    </View>
  );
};

export default RequestScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: parameters.statusBarHeight,
  },
});

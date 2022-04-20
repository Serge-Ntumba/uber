import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

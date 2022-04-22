import React from "react";
import "react-native-gesture-handler";
import HomeScreen from "./src/screens/HomeScreen";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import RootNavigator from "./src/navigations/RootNavigators";

const App = () => {
  return (
    <RootNavigator />
    // <View style={styles.container}>
    //   <HomeScreen />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

import React from "react";
import "react-native-gesture-handler";
import HomeScreen from "./src/screens/HomeScreen";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import RootNavigator from "./src/navigations/RootNavigators";
import { OriginContextProvider } from "./src/contexts/contests";

const App = () => {
  return (
    <OriginContextProvider>
      <RootNavigator />
    </OriginContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

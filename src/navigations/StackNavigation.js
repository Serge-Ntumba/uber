import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import RequestScreen from "../screens/RequestScreen";

const Home = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Home.Navigator>
      <Home.Screen
        name="HomeScreen"
        component={HomeScreen}
        option={{ headerShown: false }}
      />

      <Home.Screen
        name="RequestScreen"
        component={RequestScreen}
        option={{ headerShown: false }}
      />
    </Home.Navigator>
  );
}

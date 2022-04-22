import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStack } from "./StackNavigation";

const Drawer = createDrawerNavigator();

export default function createDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeStack" component={HomeStack} />
    </Drawer.Navigator>
  );
}

import * as React from "react";

import { HomeStack } from "./StackNavigation";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "@rneui/base";
import { colors, Colors } from "../global/styles";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: "Home",
          drawerIcon: ({ focussed, size }) => (
            <Icon
              type="material-community"
              name="home"
              color={focussed ? "#7cc" : colors.grey2}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

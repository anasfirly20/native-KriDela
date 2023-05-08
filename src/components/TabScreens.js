import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import HomeScreen from "../screens/tabScreens/HomeScreen";
import MarketScreen from "../screens/tabScreens/MarketScreen";
import PracticeScreen from "../screens/tabScreens/PracticeScreen";
import AccountScreen from "../screens/tabScreens/AccountScreen";

// Icons
import {
  homeIcon,
  marketIcon,
  marketIconActive,
  practiceIcon,
  accountIcon,
} from "../assets/icons/TabIcons";
import { SvgXml } from "react-native-svg";

const Tab = createBottomTabNavigator();

export const TabScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: "Beranda",
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <SvgXml xml={homeIcon(23, 23, "black")} />
            ) : (
              <SvgXml xml={homeIcon(23, 23)} />
            );
          },
        }}
      />
      <Tab.Screen
        name="MarketTab"
        component={MarketScreen}
        options={{
          tabBarLabel: "Pasar",
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <SvgXml xml={marketIconActive(30, 30, "black")} />
            ) : (
              <SvgXml xml={marketIcon(30, 30)} />
            );
          },
        }}
      />
      <Tab.Screen
        name="PracticeTab"
        component={PracticeScreen}
        options={{
          tabBarLabel: "Praktek",
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <SvgXml xml={practiceIcon(23, 23, "black")} />
            ) : (
              <SvgXml xml={practiceIcon(23, 23)} />
            );
          },
        }}
      />
      <Tab.Screen
        name="AccountTab"
        component={AccountScreen}
        options={{
          tabBarLabel: "Akun",
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <SvgXml xml={accountIcon(23, 23, "black")} />
            ) : (
              <SvgXml xml={accountIcon(23, 23)} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

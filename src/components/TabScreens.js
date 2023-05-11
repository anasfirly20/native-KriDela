import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import HomeScreen from "../screens/tabScreens/HomeScreen";
import MarketScreen from "../screens/tabScreens/MarketScreen";
import PracticeScreen from "../screens/tabScreens/PracticeScreen";
import AccountScreen from "../screens/tabScreens/accountScreen/AccountScreen";

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
        tabBarActiveTintColor: "#262626",
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: "Beranda",
          tabBarIcon: ({ focused }) => {
            return (
              <SvgXml
                xml={focused ? homeIcon(23, 23, "black") : homeIcon(23, 23)}
              />
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
            return (
              <SvgXml
                xml={focused ? marketIconActive(30, 30) : marketIcon(30, 30)}
              />
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
            return (
              <SvgXml
                xml={
                  focused ? practiceIcon(23, 23, "black") : practiceIcon(23, 23)
                }
              />
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
            return (
              <SvgXml
                xml={
                  focused ? accountIcon(23, 23, "black") : accountIcon(23, 23)
                }
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

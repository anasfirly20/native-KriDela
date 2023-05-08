import { StatusBar } from "expo-status-bar";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

// Navigations
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import WelcomeScreen from "./src/screens/WelcomeScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import LoginScreen from "./src/screens/LoginScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";

// After Auth / Tab Screens
import HomeScreen from "./src/screens/tabScreens/HomeScreen";
import MarketScreen from "./src/screens/tabScreens/MarketScreen";
import PracticeScreen from "./src/screens/tabScreens/PracticeScreen";
import AccountScreen from "./src/screens/tabScreens/AccountScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="MarketTab" component={MarketScreen} />
      <Tab.Screen name="PracticeTab" component={PracticeScreen} />
      <Tab.Screen name="AccountTab" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
        <Stack.Screen name="Home" component={TabScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

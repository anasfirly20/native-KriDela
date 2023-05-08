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

// Tab Screen Component
import { TabScreens } from "./src/components/TabScreens";

const Stack = createNativeStackNavigator();

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

import {
  Button,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  View,
  KeyboardAvoidingView,
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";

// Styles
import { welcomeStyle } from "../styles/Welcome";

// Icon
import { brandLogo } from "../assets/icons/Brand";
import { SvgXml } from "react-native-svg";

// Components
import ButtonWelcome from "../components/ButtonWelcome";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={welcomeStyle.container}>
      <View style={welcomeStyle.content}>
        <SvgXml xml={brandLogo} />
        <Text style={welcomeStyle.titleText}>KriDela</Text>
        <Text style={welcomeStyle.descriptionText}>
          Hiasi Hidup Dengan Kriya-in
        </Text>
        <View style={welcomeStyle.buttonContainer}>
          <ButtonWelcome
            label="Sign Up"
            borderColor="white"
            textColor="#F0B35F"
            onPress={() => navigation.navigate("Register")}
          />
          <ButtonWelcome
            label="Login"
            borderColor="white"
            textColor="black"
            backgroundColor="white"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

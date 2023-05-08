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
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

// Styles
import { registerStyle } from "../styles/Register";
import { univerStyle } from "../styles/Universal";
import { loginStyle } from "../styles/Login";

// Components
import Input from "../components/Input";
import ButtonWelcome from "../components/ButtonWelcome";
import TopLeftCircle from "../components/TopLeftCircle";

const LoginScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("Home");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={registerStyle.container}>
        <TopLeftCircle />
        <View style={registerStyle.headerContainer}>
          <Text style={registerStyle.headerText}>Selamat Datang</Text>
          <Text style={[univerStyle.smallText, registerStyle.descriptionText]}>
            Masuk untuk melanjutkan
          </Text>
          <View style={loginStyle.inputContainerParent}>
            <Input label="Nama Pengguna" placeholder="Masukan Nama Pengguna" />
            <Input label="Kata Sandi" placeholder="Masukan Sandi" />
          </View>
        </View>
        <Text
          style={[
            univerStyle.smallText,
            {
              color: "#FBAE3C",
              textAlign: "right",
              padding: 25,
            },
          ]}
          onPress={() => navigation.navigate("Forgot Password")}
        >
          Lupa password?
        </Text>
        <View style={registerStyle.buttonContainer}>
          <ButtonWelcome
            label="Masuk"
            backgroundColor="#FBAE3C"
            borderColor="transparent"
            onPress={handlePress}
          />
        </View>
        <Text
          style={[
            univerStyle.smallText,
            { textAlign: "center", marginTop: 25 },
          ]}
        >
          Belum punya akun? Daftar{" "}
          <Text
            style={{ color: "#F0B35F" }}
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            disini
          </Text>
        </Text>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

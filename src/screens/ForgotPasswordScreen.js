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
  Platform,
} from "react-native";

// Components
import TopLeftCircle from "../components/TopLeftCircle";
import ButtonWelcome from "../components/ButtonWelcome";

// Styles
import { forgotPassword } from "../styles/ForgotPassword";
import { univerStyle } from "../styles/Universal";
import Input from "../components/Input";

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={[univerStyle.container]}>
          <TopLeftCircle />
          <View style={forgotPassword.content}>
            <Text style={forgotPassword.header}>
              Reset untuk lupa kata sandi
            </Text>
            <Text
              style={{
                color: "#515151",
                fontSize: 15,
                textAlign: "left",
              }}
            >
              Lupa Password Anda? Masukan Email anda disini untuk memulai proses
              verifikasi kata sandi.
            </Text>
            <View style={{ width: "100%" }}>
              <Input label="Email/No.HP" placeholder="Masukan Email/No.HP" />
            </View>
            <View style={{ width: "90%" }}>
              <ButtonWelcome
                label="Kirim"
                backgroundColor="#FBAE3C"
                borderColor="transparent"
              />
            </View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                color: "#FBAE3C",
                textDecorationLine: "underline",
              }}
              onPress={() => navigation.goBack()}
            >
              Kembali
            </Text>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default ForgotPasswordScreen;

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

// Icons
import { ellipseCircle } from "../assets/icons/Brand";
import { SvgXml } from "react-native-svg";

// Components
import Input from "../components/Input";
import ButtonWelcome from "../components/ButtonWelcome";

const RegisterScreen = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={registerStyle.container}>
        <SvgXml xml={ellipseCircle} />
        <View style={registerStyle.headerContainer}>
          <Text style={registerStyle.headerText}>Selamat Datang</Text>
          <Text style={registerStyle.descriptionText}>
            Daftar untuk melanjutkan
          </Text>
        </View>
        <View style={univerStyle.inputContainerParent}>
          <Input label="Nama Pengguna" placeholder="Masukan Nama Pengguna" />
          <Input label="No.HP" placeholder="Masukan No.HP" />
          <Input label="Email" placeholder="Masukan Email" />
          <Input label="Kata Sandi" placeholder="Masukan Sandi" />
          <Input
            label="Konfirmasi Kata Sandi"
            placeholder="Masukan Ulang Kata Sandi"
          />
          <View style={registerStyle.buttonContainer}>
            <ButtonWelcome
              label="Daftar"
              backgroundColor="#FBAE3C"
              borderColor="transparent"
            />
          </View>
          <Text style={{ textAlign: "center", fontSize: 15 }}>
            Sudah punya akun? Masuk{" "}
            <Text
              style={{ color: "#F0B35F" }}
              onPress={() => navigation.navigate("Login")}
            >
              disini
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;

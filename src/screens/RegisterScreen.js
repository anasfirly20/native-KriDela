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
import { registerStyle } from "../styles/Register";
import { univerStyle } from "../styles/Universal";

// Icons
import { ellipseCircle } from "../assets/icons/Brand";
import { SvgXml } from "react-native-svg";

const RegisterScreen = () => {
  return (
    <SafeAreaView style={registerStyle.container}>
      <SvgXml xml={ellipseCircle} />
      <View style={registerStyle.headerContainer}>
        <Text style={registerStyle.headerText}>Selamat Datang</Text>
        <Text style={registerStyle.descriptionText}>
          Daftar untuk melanjutkan
        </Text>
      </View>
      <View style={univerStyle.inputContainerParent}>
        <View style={univerStyle.inputContainerChild}>
          <Text style={univerStyle.inputLabel}>Nama pengguna</Text>
          <TextInput style={univerStyle.input} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

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
import React from "react";

// Component
import ButtonWelcome from "../../components/ButtonWelcome";

// Styles
import { univerStyle } from "../../styles/Universal";

const AccountScreen = () => {
  return (
    <SafeAreaView style={univerStyle.container}>
      <Text>AccountScreen</Text>
      <ButtonWelcome label="Keluar" onPress={() => console.log("KELUAR")} />
    </SafeAreaView>
  );
};

export default AccountScreen;

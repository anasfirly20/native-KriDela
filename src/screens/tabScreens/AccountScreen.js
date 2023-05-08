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

// Firebase
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../firebase";

const AccountScreen = () => {
  const logout = async () => {
    try {
      const res = await signOut(auth);
      console.log("RES >", res);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SafeAreaView style={univerStyle.container}>
      <Text>AccountScreen</Text>
      <ButtonWelcome label="Keluar" onPress={logout} />
    </SafeAreaView>
  );
};

export default AccountScreen;

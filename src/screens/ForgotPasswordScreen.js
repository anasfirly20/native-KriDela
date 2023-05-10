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
import Input from "../components/Input";
import ModalForgotPassword from "../components/ModalForgotPassword";

// Styles
import { forgotPassword } from "../styles/ForgotPassword";
import { univerStyle } from "../styles/Universal";

import React, { useState } from "react";

// Firebase
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";

const ForgotPasswordScreen = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      if (email) {
        await sendPasswordResetEmail(auth, email);
        handleModal();
      } else {
        setError("Masukkan email anda");
      }
    } catch (err) {
      console.log(err);
      if (err.code === "auth/user-not-found") {
        setError("Pengguna tidak ditemukan");
      } else {
        setError("Terjadi kesalahan");
      }
    }
  };

  const handleModal = () => {
    setIsVisible(() => !isVisible);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={[univerStyle.container]}>
          <ModalForgotPassword
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            navigation={navigation}
          />
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
              <Input
                label="Email"
                placeholder="Masukan Email"
                value={email}
                onChangeText={(e) => setEmail(e)}
                keyboardType="email-address"
              />
              {error && (
                <Text style={[univerStyle.error, { marginTop: 5 }]}>
                  *{error}
                </Text>
              )}
            </View>
            <View style={{ width: "90%" }}>
              <ButtonWelcome
                label="Kirim"
                backgroundColor="#FBAE3C"
                borderColor="transparent"
                onPress={handleSubmit}
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

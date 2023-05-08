import React, { useEffect, useState } from "react";

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

// Utils
import { clearObject } from "../../utils";

// Firebase
import {
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";

const LoginScreen = ({ navigation }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const validData = data?.email && data?.password;

  const handleSubmit = async () => {
    try {
      if (validData) {
        const res = await signInWithEmailAndPassword(
          auth,
          data?.email,
          data?.password
        );
        console.log("RES >", res);
        clearObject(data, setData);
        navigation.navigate("Home");
      }
    } catch (err) {
      console.log(err);
      if (
        error.code === "auth/invalid-email" ||
        error.code === "auth/wrong-password"
      ) {
        setError("Email atau password salah");
      } else {
        setError("Email atau password salah");
      }
    }
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
            <Input
              label="Email"
              placeholder="Masukan Email"
              value={data?.email}
              onChangeText={(e) => setData({ ...data, email: e })}
              keyboardType="email-address"
            />
            <Input
              label="Kata Sandi"
              placeholder="Masukan Sandi"
              value={data?.password}
              onChangeText={(e) => setData({ ...data, password: e })}
              secureTextEntry={true}
            />
          </View>
          {error && (
            <Text style={[univerStyle.error, { marginTop: 5 }]}>*{error}</Text>
          )}
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
            onPress={handleSubmit}
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

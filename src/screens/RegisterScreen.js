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
import React, { useEffect, useState } from "react";

// Styles
import { registerStyle } from "../styles/Register";
import { univerStyle } from "../styles/Universal";

// Components
import Input from "../components/Input";
import ButtonWelcome from "../components/ButtonWelcome";
import TopLeftCircle from "../components/TopLeftCircle";

// Firebase
import { auth } from "../../firebase";
import {
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// Utils
import { clearObject } from "../../utils";

const RegisterScreen = ({ navigation }) => {
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;
  const [data, setData] = useState({
    name: "",
    telephone: null,
    email: "",
    password: "",
    passwordRepeat: "",
  });
  const [error, setError] = useState("");

  const validData =
    data?.name &&
    data?.telephone &&
    data?.email &&
    data?.password &&
    data?.passwordRepeat;

  const handleSubmit = async () => {
    try {
      if (validData) {
        if (data?.password === data?.passwordRepeat) {
          const res = await createUserWithEmailAndPassword(
            auth,
            data?.email,
            data?.password
          );
          console.log("RES >", res);
          navigation.navigate("Login");
          clearObject(data, setData);
        } else {
          setError("Password do not match");
        }
      } else {
        setError("Terjadi masalah saat membuat akun anda");
      }
    } catch (err) {
      console.log(err);
      setError("Terjadi masalah saat membuat akun anda");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={registerStyle.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          keyboardVerticalOffset={keyboardVerticalOffset}
        >
          <ScrollView>
            <TopLeftCircle />
            <View style={registerStyle.headerContainer}>
              <Text style={registerStyle.headerText}>Selamat Datang</Text>
              <Text style={registerStyle.descriptionText}>
                Daftar untuk melanjutkan
              </Text>
            </View>
            <View style={registerStyle.inputContainerParent}>
              <Input
                label="Nama Pengguna"
                placeholder="Masukan Nama Pengguna"
                value={data?.name}
                onChangeText={(e) => setData({ ...data, name: e })}
              />
              <Input
                label="No.HP"
                placeholder="Masukan No.HP"
                value={data?.telephone}
                onChangeText={(e) => setData({ ...data, telephone: e })}
                keyboardType="numeric"
              />
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
              <Input
                label="Konfirmasi Kata Sandi"
                placeholder="Masukan Ulang Kata Sandi"
                value={data?.passwordRepeat}
                onChangeText={(e) => setData({ ...data, passwordRepeat: e })}
                secureTextEntry={true}
              />
              {error && <Text style={univerStyle.error}>*{error}</Text>}
              <View style={registerStyle.buttonContainer}>
                <ButtonWelcome
                  label="Daftar"
                  backgroundColor="#FBAE3C"
                  borderColor="transparent"
                  onPress={handleSubmit}
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
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;

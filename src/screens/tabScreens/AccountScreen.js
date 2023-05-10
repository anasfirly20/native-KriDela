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
import { LinearGradient } from "expo-linear-gradient";

// Component
import ButtonWelcome from "../../components/ButtonWelcome";

// Styles
import { univerStyle } from "../../styles/Universal";
import { accountStyle } from "../../styles/Account";

// Icons
import { editPencilIcon } from "../../assets/icons/LittleIcons";
import { SvgXml } from "react-native-svg";

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
      <LinearGradient
        colors={["#FBAE3C", "#FFE3BA"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={accountStyle.headerBackground}
      >
        <View style={accountStyle.headerContainer}>
          <View style={accountStyle.containerImage}>
            <Image
              source={require("../../../assets/firly.jpeg")}
              style={accountStyle.image}
            />
            <View style={accountStyle.svgContainer}>
              <SvgXml xml={editPencilIcon(18, 18)} />
            </View>
          </View>
          <View style={accountStyle.nameContainer}>
            <Text style={accountStyle.name}>NAME HERE</Text>
            <SvgXml xml={editPencilIcon(15, 15)} />
          </View>
          <View style={accountStyle.userNameContainer}>
            <Text style={accountStyle.userName}>USERNAME</Text>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default AccountScreen;

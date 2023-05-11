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
import { editPencilIcon, locationIcon } from "../../assets/icons/LittleIcons";
import { SvgXml } from "react-native-svg";
import {
  starIcon,
  listIcon,
  durationIcon,
  settingsIcon,
  logOutIcon,
  arrowRight,
} from "../../assets/icons/Account";

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

  const iconList = [
    {
      icon: starIcon,
      text: "Favorit",
    },
    {
      icon: listIcon,
      text: "Daftar Transaksi",
    },
    {
      icon: durationIcon,
      text: "Riwayat Transaksi",
    },
    {
      icon: settingsIcon,
      text: "Pengaturan Akun",
    },
    {
      icon: logOutIcon,
      text: "Keluar",
    },
  ];

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
      <View style={accountStyle.addressContainer}>
        <SvgXml
          xml={locationIcon(22, 22)}
          style={{ alignSelf: "flex-start" }}
        />
        <Text style={accountStyle.addressText}>
          Jalan yang benar no.1 RT10 RW06 {"\n"} Kel. Iman Kec. Taqwa, Surga
          {"\n"}
          1030, Akhirat
        </Text>
        <View style={accountStyle.addressButtonContainer}>
          <Pressable
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Text style={accountStyle.addressButtonText}>Change</Text>
            <SvgXml xml={editPencilIcon(16, 16, "white")} />
          </Pressable>
        </View>
      </View>
      <ScrollView>
        <View style={{ gap: "10" }}>
          {iconList?.map((e) => (
            <View style={accountStyle.options}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 25 }}
              >
                <SvgXml xml={e?.icon()} />
                <Text style={accountStyle.optionsText}>{e?.text}</Text>
              </View>
              <SvgXml xml={arrowRight(40, 40)} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;

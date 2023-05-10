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
import React, { useEffect, useState } from "react";

// Icons
import { brandLogo, whiteEllipseCircle } from "../../assets/icons/Brand";
import {
  notifIcon,
  chatIcon,
  shoppingCartIcon,
  searchIcon,
} from "../../assets/icons/LittleIcons";
import { SvgXml } from "react-native-svg";

// Styles
import { univerStyle } from "../../styles/Universal";
import { homeStyle } from "../../styles/Home";

// Firebase
import { auth } from "../../../firebase";

const HomeScreen = () => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(auth?.currentUser);
    console.log("CHECK USER>>", auth?.currentUser);
  }, []);

  return (
    <SafeAreaView style={[univerStyle.container]}>
      <View style={[homeStyle.threeIcons, { marginTop: 10 }]}>
        <SvgXml xml={notifIcon(20, 20)} />
        <SvgXml xml={chatIcon(20, 20)} />
        <SvgXml xml={shoppingCartIcon(20, 20)} />
      </View>
      <ScrollView>
        <View style={homeStyle.headerContainer}>
          <SvgXml
            xml={whiteEllipseCircle(100, 100, "white")}
            style={{ position: "absolute" }}
          />
          <SvgXml xml={brandLogo(60, 60)} />
        </View>
        <View style={homeStyle.content}>
          {data?.displayName && (
            <Text style={homeStyle.welcomeText}>
              Hello, {data?.displayName}!
            </Text>
          )}
          <Text style={homeStyle.welcomeText}>Mau ngapain hari ini?</Text>
          <View style={homeStyle.inputContainer}>
            <TextInput style={homeStyle.input} placeholder="Telusuri....." />
            <SvgXml xml={searchIcon(18, 18)} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

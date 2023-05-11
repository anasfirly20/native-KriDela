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
import React from "react";

// Icons
import { SvgXml } from "react-native-svg";
import { addIcon } from "../assets/icons/TabIcons";

// Styles
import { univerStyle } from "../styles/Universal";

const TabButton = () => {
  return (
    <View style={univerStyle.tabButton}>
      <SvgXml xml={addIcon(35, 35)} />
    </View>
  );
};

export default TabButton;

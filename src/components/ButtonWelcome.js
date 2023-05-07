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
import React from "react";

// Styles
import { welcomeStyle } from "../styles/Welcome";

const ButtonWelcome = ({
  label,
  borderColor,
  textColor,
  backgroundColor,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      <Text
        style={[
          welcomeStyle.buttonText,
          {
            color: textColor,
            borderColor: borderColor,
            backgroundColor: backgroundColor,
          },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default ButtonWelcome;

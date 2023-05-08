import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";

// Styles
import { univerStyle } from "../styles/Universal";

const Input = ({
  label,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
}) => {
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;

  return (
    <View style={univerStyle.inputContainerChild}>
      <Text style={univerStyle.inputLabel}>{label}</Text>
      <TextInput
        style={univerStyle.input}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize="none"
      />
    </View>
  );
};

export default Input;

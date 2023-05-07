import { View, Text, TextInput } from "react-native";
import React from "react";

// Styles
import { univerStyle } from "../styles/Universal";

const Input = ({ label, onChangeText, placeholder }) => {
  return (
    <View style={univerStyle.inputContainerChild}>
      <Text style={univerStyle.inputLabel}>{label}</Text>
      <TextInput
        style={univerStyle.input}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;

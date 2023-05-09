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
import Modal from "react-native-modal";

// Styles
import { modalForgotPasswordStyle } from "../styles/ModalForgotPassword";
import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";

// Svg
import { SvgXml } from "react-native-svg";

// Icons
import { checkIcon } from "../assets/icons/ModalIcons";

const ModalForgotPassword = ({
  isVisible,
  handleModal,
  setIsVisible,
  navigation,
}) => {
  return (
    <SafeAreaView style={modalForgotPasswordStyle.container}>
      <Modal isVisible={isVisible}>
        <View style={modalForgotPasswordStyle.content}>
          <SvgXml xml={checkIcon} />
          <View>
            <Text style={modalForgotPasswordStyle.headerText}>
              Halo disana!
            </Text>
            <Text style={modalForgotPasswordStyle.descText}>
              Cek email anda untuk mengubah kata Sandi baru dan klik tombol{" "}
              <Text style={{ fontWeight: "700" }}>OKE</Text>
            </Text>
          </View>
          <LinearGradient
            colors={["#FFA41E", "#FFE8C6"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={modalForgotPasswordStyle.buttonContainer}
          >
            <Pressable
              onPress={() => {
                setIsVisible(!isVisible);
                setTimeout(() => {
                  navigation.navigate("Login");
                }, 500);
              }}
            >
              <Text style={modalForgotPasswordStyle.buttonText}>OKE</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ModalForgotPassword;

import { StyleSheet } from "react-native";

export const modalForgotPasswordStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  content: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    borderRadius: 10,
    gap: 20,
  },
  headerText: {
    color: "black",
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
  },
  descText: {
    color: "black",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    paddingHorizontal: 30,
  },
  buttonContainer: {
    backgroundColor: "orange",
    width: "35%",
    marginTop: 10,
    paddingVertical: 5,
    borderRadius: "50%",
  },
  buttonText: {
    fontWeight: "700",
    textAlign: "center",
    fontSize: 20,
  },
});

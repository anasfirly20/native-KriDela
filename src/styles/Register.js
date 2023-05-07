import { StyleSheet } from "react-native";

export const registerStyle = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  headerContainer: {
    marginTop: 10,
    paddingHorizontal: 25,
  },
  headerText: {
    color: "#515151",
    fontSize: 28,
    fontWeight: "700",
  },
  descriptionText: {
    color: "#515151",
  },
  buttonContainer: {
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,

    elevation: 12,
    gap: 30,
  },
  inputContainerParent: {
    marginTop: 30,
    paddingHorizontal: 25,
    gap: 25,
  },
});

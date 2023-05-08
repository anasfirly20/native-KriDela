import { StyleSheet } from "react-native";

export const homeStyle = StyleSheet.create({
  threeIcons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 20,
    marginHorizontal: 25,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  content: {
    margin: 25,
  },
  welcomeText: {
    fontSize: 23,
    fontWeight: "500",
  },
  inputContainer: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#C4C4C4",
    borderRadius: 5,
    padding: 10,
  },
});

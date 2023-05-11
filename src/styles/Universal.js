import { StyleSheet } from "react-native";

export const univerStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputContainerChild: {
    gap: 10,
    backgroundColor: "#F2F4F6",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
  },
  inputLabel: {
    fontSize: 16,
  },
  input: {
    fontSize: 16,
  },
  smallText: {
    fontSize: 16,
  },
  error: {
    color: "red",
    fontSize: 15,
    marginLeft: 10,
  },
  tabButton: {
    backgroundColor: "#FFB443",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    position: "relative",
    bottom: 5,
    width: 65,
    height: 65,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});

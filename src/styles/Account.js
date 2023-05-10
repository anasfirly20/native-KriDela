import { StyleSheet } from "react-native";

export const accountStyle = StyleSheet.create({
  headerBackground: {
    height: "40%",
    backgroundColor: "#FBAE3C",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    gap: 25,
  },
  containerImage: {
    position: "relative",
  },
  image: {
    borderRadius: 100,
    width: 100,
    height: 100,
  },
  svgContainer: {
    position: "absolute",
    backgroundColor: "white",
    padding: 5,
    borderRadius: 100,
    bottom: 0,
    right: 0,
  },
  nameContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  name: {
    color: "#683E00",
    fontSize: 18,
    fontWeight: "700",
  },
  userNameContainer: {
    overflow: "hidden",
    borderRadius: 100,
  },
  userName: {
    backgroundColor: "white",
    padding: 10,
    paddingHorizontal: 25,
    color: "#E38800",
    fontWeight: "600",
  },
});

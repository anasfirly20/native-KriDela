import { StyleSheet } from "react-native";

export const accountStyle = StyleSheet.create({
  headerBackground: {
    height: "40%",
    backgroundColor: "#FBAE3C",
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
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
    paddingHorizontal: 30,
    color: "#E38800",
    fontWeight: "600",
  },
  addressContainer: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 25,
    width: "80%",
    alignSelf: "center",
    marginTop: -50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
  },
  addressText: {
    fontSize: 15,
    paddingRight: 15,
    paddingBottom: 15,
    color: "#262626",
  },
  addressButtonContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 10,
    backgroundColor: "#FBAE3C",
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  addressButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },
});

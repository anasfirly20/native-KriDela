import { StyleSheet } from "react-native";

export const welcomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    backgroundColor: "#00000078",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    color: "white",
    fontSize: 30,
    fontWeight: "600",
  },
  descriptionText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  buttonContainer: {
    marginTop: 60,
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
  buttonText: {
    fontSize: 25,
    textAlign: "center",
    marginHorizontal: 25,
    padding: 13,
    borderWidth: 2.5,
    borderRadius: 30,
    overflow: "hidden",
  },
  circleTop: {
    position: "absolute",
    left: 0,
    top: 0,
  },
  circleBottom: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});

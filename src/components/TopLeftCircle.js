import { View, Text } from "react-native";
import React from "react";

import { SvgXml } from "react-native-svg";
import { ellipseCircle } from "../assets/icons/Brand";

const TopLeftCircle = () => {
  return (
    <>
      <SvgXml xml={ellipseCircle} />
    </>
  );
};

export default TopLeftCircle;

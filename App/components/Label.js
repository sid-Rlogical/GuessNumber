import React from "react";
import { Text, StyleSheet } from "react-native";

import Colors from "../utils/constants/colors";

const Label = (props) => {
  return (
    <Text {...props} style={{ ...styles.text, ...props.style }}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: Colors.black,
  },
});

export default Label;

import React from "react";
import { View, StyleSheet } from "react-native";

import Colors from "../utils/constants/colors";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    padding: 20,
    backgroundColor: Colors.white,
    borderBottomEndRadius: 10,
    borderTopStartRadius: 10,
  },
});

export default Card;

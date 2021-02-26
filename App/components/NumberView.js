import React from "react";
import { StyleSheet, View } from "react-native";

//File import
import Colors from "../utils/constants/colors";
import Label from "../components/Label";

const NumberView = (props) => {
  return (
    <View style={styles.container}>
      <Label style={styles.number}>{props.children}</Label>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.secondary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  number: {
    fontSize: 22,
    color: Colors.secondary,
  },
});

export default NumberView;

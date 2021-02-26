import React from "react";
import { StyleSheet, TextInput } from "react-native";

//File import
import Colors from "../utils/constants/colors";

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
    fontSize: 14,
    color: Colors.black,
    marginVertical: 5,
  },
});

export default Input;

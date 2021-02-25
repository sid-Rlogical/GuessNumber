import React from "react";
import { Text, View, StyleSheet } from "react-native";

//File import 
import Colors from '../utils/constants/colors';

const Header = (props) => {
  return (
    <View style={styles.Header}>
      <Text style={styles.HeaderTitle}>{props.headerTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    height: 95,
    paddingTop: 30,
  },

  HeaderTitle: {
    fontSize: 18,
    color: Colors.black,
  },
});

export default Header;

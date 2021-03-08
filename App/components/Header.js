import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";

//File import
import Colors from "../utils/constants/colors";

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.HeaderBase,
        ...Platform.select({
          ios: styles.HeaderIOS,
          android: styles.HeaderAndroid,
        }),
      }}
    >
      <Text style={styles.HeaderTitle}>{props.headerTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderBase: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 95,
    paddingTop: 30,
  },

  HeaderIOS: {
    borderColor: "#ccc",
    backgroundColor: Colors.white,
    borderWidth: 1,
  },

  HeaderAndroid: {
    backgroundColor: Colors.primary,
  },

  HeaderTitle: {
    fontSize: 18,
    color: Platform.OS === "android" ? Colors.white : Colors.primary,
  },
});

export default Header;

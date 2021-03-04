import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../utils/constants/colors";

const MainButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}> 
      <View style={{...styles.buttonContainer, ...props.styles}}>
        <Text style={{...styles.buttonText, ...props.style}}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

    buttonContainer:{
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal:30,
        borderRadius: 22
    },

    buttonText: {
        color: Colors.white,
        fontSize: 18,
        alignItems: "center",
    },

});

export default MainButton;

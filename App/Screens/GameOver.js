import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import MainButton from "../components/MainButton";

const GameOver = (props) => {
  return (
    <View style={styles.viewContainer}>
      <Text> Game is over </Text>
      <Text> Number of rounds : {props.roundNumber} </Text>
      <Text> Number was : {props.userNumber} </Text>
      <MainButton onPress={props.onPressStartNewGame}> {"NEW GAME"} </MainButton> 
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOver;

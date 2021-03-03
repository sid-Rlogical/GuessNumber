import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const GameOver = (props) => {
  return (
    <View style={styles.viewContainer}>
      <Text> Game is over </Text>
      <Image source={require('../assets/Images/success.png')}/>
      <Text> Number of rounds : {props.roundNumber} </Text>
      <Text> Number was : {props.userNumber} </Text>
      <Button title="New Game" onPress={props.onPressStartNewGame}/>
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

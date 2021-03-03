import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

import NumberView from "../components/NumberView";
import Card from "../components/Card";

const generateRandomNumber = (min, max, userChoice) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const ranNumber = Math.floor(Math.random() * (max - min) + min);

  if (ranNumber === userChoice) {
    return generateRandomNumber(min, max.userChoice);
  } else {
    return ranNumber;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, props.userValue)
  );
  const [rounds, setRound] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const { userValue, onGameOver } = props;

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userValue) ||
      (direction === "greater" && currentGuess > userValue)
    ) {
      Alert.alert("Guess Number", "You know that this is wrong number", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRound((currentRound) => currentRound + 1);
  };

  useEffect(() => {
    if (currentGuess === userValue) {
      onGameOver(rounds);
    }
  }, [currentGuess, userValue, onGameOver]);

  return (
    <View style={styles.viewContainer}>
      <Text> Opponent's Game </Text>
      <NumberView> {currentGuess} </NumberView>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={nextGuessHandler.bind(this, "lower")} />
        <Button
          title="GREATER"
          onPress={nextGuessHandler.bind(this, "greater")}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 300,
    marginTop: 10,
    maxWidth: "80%",
    borderRadius: 10,
  },
});

export default GameScreen;

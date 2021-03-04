import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberView from "../components/NumberView";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import Colors from "../utils/constants/colors";

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

const renderItemList = (listLength, itemData) => {
  return (
    <View key={value} style={styles.listItem}>
      <Text>#{listLength - itemData.index}</Text>
      <Text>{itemData.item}</Text>
    </View>
  );
};

const GameScreen = (props) => {
  const initNumber = generateRandomNumber(1, 100, props.userValue);
  const [currentGuess, setCurrentGuess] = useState(initNumber);
  const [pastGuesses, setPassGuesses] = useState([initNumber.toString()]);

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
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    //setRound((currentRound) => currentRound + 1);
    setPassGuesses((currentPassNumber) => [nextNumber.toString(), ...currentPassNumber]);
  };

  useEffect(() => {
    if (currentGuess === userValue) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userValue, onGameOver]);

  return (
    <View style={styles.viewContainer}>
      <Text> Opponent's Game </Text>
      <Text> Your guess number is {userValue} </Text>
      <NumberView> {currentGuess} </NumberView>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="remove" size={24} color={Colors.white} />
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
          <Ionicons name="ios-add" size={24} color={Colors.white} />
        </MainButton>
      </Card>
      <View style={styles.scrollMain}>
        {/*<ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          {pastGuesses.map((guess, index) => renderItemList(guess, pastGuesses.length - index))}
        </ScrollView> */}

        <FlatList
          keyExtractor={(itemData) => itemData}
          renderItem={renderItemList.bind(this, pastGuesses.length)}
          data={pastGuesses}
        />
      </View>
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
    width: 400,
    marginTop: 40,
    maxWidth: "90%",
    borderRadius: 10,
  },

  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    backgroundColor: Colors.white,
    borderRadius: 15,
  },

  scrollMain: {
    flex: 1,
    width: "80%",
    marginVertical: 30,
  },
});

export default GameScreen;

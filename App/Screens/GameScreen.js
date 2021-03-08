import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberView from "../components/NumberView";
import Card from "../components/Card";
import MainButton from "../components/PlatformSpecificFile/MainButton";
import Colors from "../utils/constants/colors";
import DefaultStyles from "../utils/constants/default-styles";

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
    <View style={styles.listItem}>
      <Text>#{listLength - itemData.index}</Text>
      <Text>{itemData.item}</Text>
    </View>
  );
};

const GameScreen = (props) => {
  const initNumber = generateRandomNumber(1, 100, props.userValue);
  const [currentGuess, setCurrentGuess] = useState(initNumber);
  const [pastGuesses, setPassGuesses] = useState([initNumber.toString()]);
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get("window").width
  );
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get("window").height
  );
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const { userValue, onGameOver } = props;

  let containerStyle = styles.listContainer;

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
    setPassGuesses((currentPassNumber) => [
      nextNumber.toString(),
      ...currentPassNumber,
    ]);
  };

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceWidth(Dimensions.get("window").width);
      setAvailableDeviceHeight(Dimensions.get("window").height);
    };

    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  useEffect(() => {
    if (currentGuess === userValue) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userValue, onGameOver]);

  if (availableDeviceWidth < 350) {
    containerStyle = styles.listBigContainer;
  }

  if (availableDeviceHeight < 500) {
    return (
      <View style={styles.screen}>
        <Text style={DefaultStyles.title}> Opponent's Game </Text>
        <Text style={DefaultStyles.title}>
          Your guess number is {userValue}
        </Text>
        <View style={styles.control}>
          <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="remove" size={24} color={Colors.white} />
          </MainButton>
          <NumberView> {currentGuess} </NumberView>
          <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
            <Ionicons name="ios-add" size={24} color={Colors.white} />
          </MainButton>
        </View>
        <View style={containerStyle}>
          <FlatList
            keyExtractor={(itemData) => itemData}
            renderItem={renderItemList.bind(this, pastGuesses.length)}
            data={pastGuesses}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}> Opponent's Game </Text>
      <Text style={DefaultStyles.title}>Your guess number is {userValue}</Text>
      <NumberView> {currentGuess} </NumberView>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="remove" size={24} color={Colors.white} />
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
          <Ionicons name="ios-add" size={24} color={Colors.white} />
        </MainButton>
      </Card>
      <View style={containerStyle}>
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
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: Dimensions.get("window").height > 600 ? 5 : 5,
    width: 400,
    maxWidth: "90%",
  },
  listContainer: {
    flex: 1,
    width: "60%",
  },
  listBigContainer: {
    flex: 1,
    width: "80%",
  },
  list: {
    flexGrow: 1,
    // alignItems: 'center',
    justifyContent: "flex-end",
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  control: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
  },
});
export default GameScreen;

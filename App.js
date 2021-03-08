import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";

//File imports
import Header from "./App/components/Header";
import StartGameScreen from "./App/Screens/StartGameScreen";
import GameScreen from "./App/Screens/GameScreen";
import GameOverScreen from "./App/Screens/GameOver";
import * as Font from "expo-font";
import { AppLoading } from "expo-app-loading";

const fetchFontHandler = () => {
  return Font.loadAsync({
    "open-sans-Regular": require("./App/assets/Fonts/OpenSans-Regular.ttf"),
    "open-sans-Bold": require("./App/assets/Fonts/OpenSans-Bold.ttf"),
  });
};

export default App = () => {
  const [selectedNum, setSelectedNum] = useState();
  const [guessRound, setGuessRound] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFontHandler}
        onFinish={setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const startNewGameHandler = () => {
    setSelectedNum(null);
    setGuessRound(0);
  };

  const selectedGameHandler = (selectedNumber) => {
    setSelectedNum(selectedNumber);
  };

  const gameOverHandler = (numberOfRound) => {
    setGuessRound(numberOfRound);
  };

  let firstScreen = <StartGameScreen onStartGame={selectedGameHandler} />;

  if (selectedNum && guessRound <= 0) {
    firstScreen = (
      <GameScreen userValue={selectedNum} onGameOver={gameOverHandler} />
    );
  } else if (guessRound > 0) {
    firstScreen = (
      <GameOverScreen
        roundNumber={guessRound}
        userNumber={selectedNum}
        onPressStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header headerTitle="Guess a number" />
      {firstScreen}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

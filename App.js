import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

//File imports
import Header from "./App/components/Header";
import StartGameScreen from "./App/Screens/StartGameScreen";

export default App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header headerTitle="Guess a number" />
      <StartGameScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

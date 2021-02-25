import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

//File import
import Card from "../components/Card";
import Colors from "../utils/constants/colors";
import Input from "../components/Input";

const StartGameScreen = (props) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const inputNumberHandler = (enterNumber) => {
    setEnteredNumber(enterNumber.replace(/[^0-9]/g, ""));
  };

  const removeKeyboard = () => {
        Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={removeKeyboard}>
      <View style={styles.Screen}>
        <Text style={styles.textContainer}> Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a number</Text>
          <Input
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={inputNumberHandler}
            value={enteredNumber}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="RESET"
                onPress={() => {}}
                color={Colors.secondary}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="CONFIRM"
                onPress={() => {}}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
  },

  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 20,
  },

  textContainer: {
    fontSize: 20,
    color: Colors.black,
    marginVertical: 20,
  },

  button: {
    width: 100,
    marginTop: 5,
  },

  input: {
    width: 50,
    textAlign: "center",
  },
});

export default StartGameScreen;

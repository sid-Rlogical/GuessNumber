import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback
} from "react-native";
import Colors from "../../utils/constants/colors";

const MainButton = (props) => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.button}>
      <ButtonComponent onPress={props.onPress}>
        <View style={{ ...styles.buttonContainer, ...props.styles }}>
          <Text style={{ ...styles.buttonText, ...props.style }}>
            {props.children}
          </Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({

  button: {
    borderRadius: 25,
    overflow: 'hidden',
  },

  buttonContainer: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 22,
  },

  buttonText: {
    color: Colors.white,
    fontSize: 18,
    alignItems: "center",
  },
});

export default MainButton;

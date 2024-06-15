import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageStyle,
  TextStyle,
  ViewStyle,
  GestureResponderEvent,
} from "react-native";

/**
 * Style definition for the XSocialButton component.
 */
const styles = StyleSheet.create({
  /**
   * Style for the container TouchableOpacity.
   */
  xStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    borderWidth: 0.5,
    borderColor: "#FFF",
    height: 40,
    width: 220,
    borderRadius: 5,
    margin: 5,
  },
  /**
   * Style for the X icon Image.
   */
  imageIconStyle: {
    padding: 10,
    marginLeft: 15,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
  /**
   * Style for the text inside the TouchableOpacity.
   */
  textStyle: {
    color: "#FFF",
    marginLeft: 20,
    marginRight: 20,
  },
});

/**
 * Props for the XSocialButton component.
 *
 * @typedef {Object} XSocialButtonProps
 * @property {(event: GestureResponderEvent) => void} onPress - Function to be called when the button is pressed.
 * @property {ViewStyle} [buttonViewStyle] - Style for the entire button view.
 * @property {ImageStyle} [logoStyle] - Style for the X logo Image.
 * @property {TextStyle} [textStyle] - Style for the text inside the button.
 * @property {string} [buttonText] - Text to be displayed inside the button.
 */

/**
 * A custom React component representing a social login button for X.
 *
 * @param {XSocialButtonProps} props - The props for the component.
 * @returns {React.JSX.Element} JSX element representing the XSocialButton.
 */
const XSocialButton = (props) => {
  return (
    <TouchableOpacity
      style={{ ...styles.xStyle, ...props.buttonViewStyle }}
      onPress={props.onPress}
    >
      <Image
        source={require("../images/x.png")}
        style={{ ...styles.imageIconStyle, ...props.logoStyle }}
      />
      <Text style={{ ...styles.textStyle, ...props.textStyle }}>
        {props.buttonText ? props.buttonText : "Sign in with X"}
      </Text>
    </TouchableOpacity>
  );
};

export default XSocialButton;

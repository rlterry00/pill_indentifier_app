import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  FlatList,
  SafeAreaView,
  TouchableOpacity
} from "react-native";

export default class HomeScreen extends Component {
  state = {
    message: "Charging"
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior="padding">
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View>
              <Text>{this.props.navigation.getParam('title')}</Text>
              <Image
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                      resizeMode="contain"
                      source={{ url: this.props.navigation.getParam('imageSrc') }}
                    />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // alignItems: "center",
    // justifyContent: "center"
  },
  content: {
    height: "40%",
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  list: {
    height: "60%",
    flexDirection: "column",
    // alignItems: "flex-start",
    justifyContent: "center"
  }
});

import React, { Component } from "react";
import axios from "axios";
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
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { Camera } from 'expo-camera';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      post: [],
      message: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://rximage.nlm.nih.gov/api/rximage/1/rxnav?imprint=3251")
      .then(response => {
        this.setState({
          loading: false,
          post: response.data.nlmRxImages
        });
        console.log(this.state.post);
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleButton = () => {
    this.setState({
      message: "hydouken"
    });
  };

  handleListTap = item => {
    this.props.navigation.navigate("Another", {
      title: item.name,
      imageSrc: item.imageUrl
    });
  };
  render() {
    const post = this.state.post;
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior="padding">
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.content}>
              <Text>Bruh!</Text>
              <Text>{this.state.message}</Text>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  borderWidth: 1
                }}
                resizeMode="contain"
                source={require("./assets/blacklighticon.png")}
              />
              <TextInput
                style={{
                  height: 40,
                  width: 200,
                  borderColor: "gray",
                  borderWidth: 1
                }}
                value={this.state.message}
                onChangeText={text => this.setState({ message: text })}
              />
              <Button title="Press me" onPress={this.handleButton} />
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.list}>
            <View style={{ flex: 1 }}>
              {this.state.loading && 
                <ActivityIndicator style={styles.ActivityIndicator} size="large" color="black" />
              }

              <FlatList
                style={{
                  flexDirection: "column",
                  height: "100%",
                  width: "100%"
                }}
                ItemSeparatorComponent={() => (
                  <View
                    style={{
                      height: 3,
                      width: "100%",
                      backgroundColor: "lightgray"
                    }}
                  />
                )}
                data={post}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => this.handleListTap(item)}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 10
                    }}
                  >
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        borderWidth: 1
                      }}
                      resizeMode="contain"
                      source={{ url: item.imageUrl }}
                    />
                    <Text style={{ padding: 10 }}>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
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
  },
  ActivityIndicator: {
    marginTop: 50
  }
});

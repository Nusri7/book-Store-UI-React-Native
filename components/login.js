import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

const img = {
  uri: "https://img.wallpapersafari.com/tablet/768/1024/74/49/F7dPYn.jpg",
};
export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ImageBackground
          source={img}
          resizeMode="cover"
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
          }}
        >
          <Text style={styles.txtLogin}>WelCome</Text>
          <View style={{ marginTop: 40, marginBottom: 40 }}>
            <Text style={styles.txtInput}>User Name</Text>
            <TextInput
              style={styles.input}
              placeholder={"Enter your User Name"}
              placeholderTextColor="#747d8c"
            />
          </View>
          <View>
            <Text style={styles.txtInput}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder={"Enter your Password"}
              placeholderTextColor="#747d8c"
              secureTextEntry={true}
            />
          </View>
          <View style={{ flex: 1, alignItems: "center", marginTop: 40 }}>
            <TouchableOpacity
              style={styles.btnlogin}
              onPress={() => this.props.navigation.navigate("dashboard")}
            >
              <Text style={styles.txtBtnLogin}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("signup")}
              style={{ marginTop: 15 }}
            >
              <Text>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.txtFooter}>&copy;Ahamed Nusri 2022</Text>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  txtLogin: {
    textAlign: "center",
    fontSize: 55,
    marginTop: 70,
    marginBottom: 20,
    color: "white",
    fontWeight: "700",
  },
  input: {
    height: 50,
    marginTop: 5,
    margin: 15,
    borderWidth: 0,
    borderRadius: 25,
    padding: 10,
    paddingLeft: 15,
    backgroundColor: "#eccc68",
    shadowColor: "#171717",
    shadowOffset: { width: 8, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  txtInput: {
    marginLeft: 25,
    fontSize: 21,
    color: "#fff200",
    fontWeight: "600",
  },
  btnlogin: {
    color: "black",
    width: 200,
    heught: 200,
    backgroundColor: "#ffd32a",
    borderRadius: 30,
    shadowColor: "#2f3542",
    shadowOffset: { width: 4, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginTop: 40,
  },
  txtBtnLogin: {
    textAlign: "center",
    padding: 10,
    fontSize: 25,
    fontWeight: "700",
    color: "#808e9b",
  },
  txtFooter: {
    textAlign: "center",
    fontSize: 15,
    marginBottom: 5,
    color: "#747d8c",
  },
});

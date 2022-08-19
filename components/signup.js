import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  TextInput,
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

const img = {
  uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIWFRUSFRUVFRUVEhUVFRUVFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDBv/EACMQAQEBAAICAgEFAQAAAAAAAAABEQISIWExUXEDQYHB8JH/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQYDAv/EAB0RAQACAgIDAAAAAAAAAAAAAAABESFBAjESUXH/2gAMAwEAAhEDEQA/APAYEiY2jTNdksOoBDCcfZKBxv2UoCasXftM9gWBKUDCQhIB0Ov+1LFMAEheIKysq6Kk9mGII0mEqAt4liaJgWQkSVbxULEiogqxEsUUZ0TyhLhrS1cT4VSUpighExUC8PRYmrxq4MJFylggYiiiGVpNKCECoBZQUE8qIGUNW1VQsKCC/hKgLYQUGVpYkBV1mLdLGsn2Mb6EuC4W8QlFAxMEFRSqKhnspIaLYgLiEoB1XEsJQDUt9GlilpAFZ1dUGVLxTEGmdWGqFJyDqZCgaATiaXiCLpgAABocYAQEoKmLCUE37W3S0QSLoKLMZNWoGiQgNeE0FVJyxaUufYhALgCVqIBgQBcZixCRcJSJQXS8amVQOtElW0CqfyCpYWhghOVFrOguRbNZ1bAXCVKQEaxMAXEsRZSwRqRKSStZinUCyFhIS4CLi9WYUC3kYoJp1JElT6EWUv2f7FCr2QlACF5AuJYAAl4iZMtcozKs8FihDskWwCkAAi32kA0SKC1JyJQUhogjSSVNUAosoJJSighqRrwCaFxfAIXiuJxoI1n0hATFW1IUJq9hbx/koWQY8hZarn0yoJV7VaeAZ0yNaloAYAmDVhKUUmFi2JgIsWxnQWRMWroM4UsXEDSxNWcgTDVppQJiyrqjMqrpZpQmmEhACwsJQRdWpgL2oyFltcoieQCUwaoM41iJiBKtCVRBqxCig0qWAspoQDDjCyoC2LUhKBYjUTZ8UDlTTDAS01rEABMBqzfKABU1c/4vgEnJLGsPJQneegC5MmhKSlgvhKmgul5Uz2TwKsusrTBE0iylADuUCww7Hb0YCclxKWARciVNQMWlpqiNaiRBdReRaosQsANLExZUE30sJyTQLVXGYo12GdDyLW0tKAsjNIoJqyVcZlBdRqphQJFsLAOx1Eh9FLVqALWbFBdTtE+PwtgLBnyFltaVKSgYQlAKFIBKtvpKgNaS6kSFi5haSr4A7CYFyJYukhgGlWRnDIsLISGAmmr2XQZ7flZRMBdBeoIaJQaTMOv+00AEoLaHb0gLEWUlBFXEKFkQsX5BDacSckCewRRbxTF0iCdRQqCgSLFEW8gqCHwtLVC0lJyhQXGVlWw7GVwogUsNMqhhLCUoHIXSUVJYljWpRCUtSKCSrS8VMiFmEggupRbFVnGkw/IhClAXuIGRKoIJ+p/a8vgD2e2eBxBI0kNM8f3BZ7Xar+lfgDZsqQFkLDj8Am02rPKAk9Ei0BFdJPAPfF0hzX9gREXj/QECAAzx/dpRI6SGWqCjHBuAnE49HL5AVX//2Q==",
};
export default class Signup extends Component {
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
          <Text style={styles.txtLogin}>Register</Text>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.txtInput}>User Name</Text>
            <TextInput
              style={styles.input}
              placeholder={"Enter your User Name"}
              placeholderTextColor="#747d8c"
            />
          </View>
          <View>
            <Text style={styles.txtInput}>E-mail Address</Text>
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
            />
          </View>
          <View>
            <Text style={styles.txtInput}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholder={"Confirm Your Password"}
              placeholderTextColor="#747d8c"
            />
          </View>
          <View>
            <Text style={styles.txtInput}>Mob No</Text>
            <TextInput
              style={styles.input}
              placeholder={"Enter your Phone Number"}
              placeholderTextColor="#747d8c"
            />
          </View>
          <View style={{ flex: 1, alignItems: "center", marginTop: 10 }}>
            <TouchableOpacity
              style={styles.btnlogin}
              onPress={() => this.props.navigation.navigate("login")}
            >
              <Text style={styles.txtBtnLogin}>Register</Text>
            </TouchableOpacity>
          </View>
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
    fontSize: 35,
    marginTop: 45,
    marginBottom: 10,
    color: "white",
    fontWeight: "700",
  },
  input: {
    height: 50,
    marginTop: 5,
    margin: 15,
    borderWidth: 0,
    borderRadius: 15,
    padding: 10,
    backgroundColor: "#dfe4ea",
    shadowColor: "#171717",
    shadowOffset: { width: 8, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  txtInput: {
    marginLeft: 25,
    fontSize: 18,
    color: "#ced6e0",
    fontWeight: "600",
  },
  btnlogin: {
    color: "black",
    width: 200,
    heught: 200,
    backgroundColor: "#778ca3",
    borderRadius: 30,
    shadowColor: "#171717",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  txtBtnLogin: {
    textAlign: "center",
    padding: 10,
    fontSize: 25,
    fontWeight: "700",
    color: "#c8d6e5",
  },
  txtFooter: {
    textAlign: "center",
    fontSize: 15,
    marginBottom: 5,
    color: "#d1d8e0",
  },
});

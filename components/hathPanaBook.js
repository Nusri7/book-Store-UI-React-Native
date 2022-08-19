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
  Image,
  TouchableHighlight,
} from "react-native";
import SearchBooks from "./searchBooks";

export default class HathPanaBook extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.backBtn}>
          <Text
            onPress={() => this.props.navigation.navigate("searchBooks")}
            style={styles.backBtnTxt}
          >
            &#x276E; 
          </Text>
        </TouchableHighlight>
        <View style={styles.grid1}>
          <View
            style={{
              shadowColor: "#2f3542",
              shadowOffset: { width: 4, height: 2 },
              shadowOpacity: 1,
              shadowRadius: 7,
            }}
          >
            <Image
              style={styles.bookImg}
              source={{
                uri: "https://ae85df921b92073b52e8-a126a45a4c59e90797d94cd877fbe744.ssl.cf3.rackcdn.com/books/cover/uc-54a0e214e8221.jpg",
                height: 220,
                width: 150,
              }}
            />
          </View>
          <Text style={styles.bookTopic}>Hath Pana</Text>
          <Text style={styles.bookAuthor}>Kumaratunga Munidasa</Text>
          <Text style={[styles.StarRate]}>
            Ratings : &#9733; &#9733; &#9733; &#9733; &#9734;
          </Text>
        </View>
        <TouchableHighlight style={styles.btnBuy} onPress={console.log()}>
          <Text style={styles.txtBuy}>Buy Now</Text>
        </TouchableHighlight>

        <View style={styles.grid2}>
          <Text style={styles.descriptionHeading}>Description</Text>
          <Text style={styles.description}>
            Hath pana which is a wonderful story about Neraluwe village leader
            Kusal Hami’s stupid son ‘Kiri Hami’. Translation
            of such valuable children’s story books should be of immense help to
            our young readers to create literacy interest in them, improve their
            knowledge in English and also develop reading habits which are
            feared to be on the wane.
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f1e3",
  },
  grid1: {
    alignItems: "center",
    backgroundColor: "#40407a",
  },
  bookImg: {
    marginTop: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
  bookTopic: {
    fontSize: 25,
    fontWeight: "600",
    color: "#f7f1e3",
  },
  bookAuthor: {
    fontSize: 16,
    marginBottom: 20,
    color: "#dcdde1",
  },
  StarRate: {
    color: "#ffdd59",
    fontSize: 17,
    marginBottom: 45,
  },
  btnBuy: {
    marginLeft: "30%",
    marginRight: "30%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -20,
    backgroundColor: "#ffd32a",
    height: 50,
    borderRadius: 15,
  },

  txtBuy: {
    fontSize: 25,
    color: "#4b4b4b",
    fontWeight: "500",
    shadowColor: "#2f3542",
    shadowOffset: { width: 4, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  descriptionHeading: {
    marginTop: 10,
    marginLeft: 15,
    fontSize: 23,
    fontWeight: "500",
  },
  description: {
    margin: 15,
    textAlign: "justify",
  },
  backBtn: {
    backgroundColor: "#40407a",
  },
  backBtnTxt: {
    marginTop: 30,
    marginLeft: 13,
    fontSize: 30,
    fontWeight: "500",
    color: "#ffb142",
  },
});

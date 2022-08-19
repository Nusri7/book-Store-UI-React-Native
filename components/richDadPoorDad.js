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

export default class RichDadPoorDadBook extends Component {
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
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAjLYv7r7ez9hCyU7G0-M9Yc32HsZE0FPlKCVsIGb0KiCksc_4-Bb1dtkv29IsRiSPxrw&usqp=CAU",
                height: 220,
                width: 150,
              }}
            />
          </View>
          <Text style={styles.bookTopic}>Rich Dad Poor Dad</Text>
          <Text style={styles.bookAuthor}>Robert T. Kiyosaki</Text>
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
            Rich Dad Poor Dad is a 1997 book written by Robert T. Kiyosaki and
            Sharon Lechter. It advocates the importance of financial literacy,
            financial independence and building wealth through investing in
            assets, real estate investing, starting and owning businesses, as
            well as increasing one's financial intelligence.
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
    backgroundColor: "#227093",
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
    backgroundColor: "#f9ca24",
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
    shadowRadius: 2,
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
    backgroundColor: "#227093",
  },
  backBtnTxt: {
    marginTop: 30,
    marginLeft: 13,
    fontSize: 30,
    fontWeight: "500",
    color: "#ffb142",
  },
});

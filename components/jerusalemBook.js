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

export default class JerusalemBook extends Component {
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
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7LJGqVBNrktLCQo73y7_MTvIuuNN3D0_ARa7cwjzsz49aWqnR_3OoSM7u4_B8L0bIxM&usqp=CAU",
                height: 220,
                width: 150,
              }}
            />
          </View>
          <Text style={styles.bookTopic}>Jerusalem</Text>
          <Text style={styles.bookAuthor}>Alan Moore</Text>
          <Text style={[styles.StarRate]}>
            Ratings : &#9733; &#9733; &#9733; &#9733; &#9734;
          </Text>
        </View>
        <TouchableHighlight style={styles.btnBuy} onPress={console.log("hii")}>
          <Text style={styles.txtBuy}>Buy Now</Text>
        </TouchableHighlight>

        <View style={styles.grid2}>
          <Text style={styles.descriptionHeading}>Description</Text>
          <Text style={styles.description}>
            Jerusalem is a novel by British author Alan Moore, wholly set in and
            around the author's home town of Northampton, England. Combining
            elements of historical and supernatural fiction and drawing on a
            range of writing styles, the author describes it as a work of
            'genetic mythology'.
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
    backgroundColor: "#f53b57",
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
    color: "#d1ccc0",
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
    shadowOpacity: 0.5,
    shadowRadius: 6,
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
    backgroundColor: "#f53b57",
  },
  backBtnTxt: {
    marginTop: 30,
    marginLeft: 13,
    fontSize: 30,
    fontWeight: "500",
    color: "#fff200",
  },
});

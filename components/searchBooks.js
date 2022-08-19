import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
  StatusBar,
  TextInput,
  Image,
} from "react-native";

import { FlatList } from "react-native-gesture-handler";
const image = {
  uri: "https://i.pinimg.com/originals/fe/e5/ea/fee5eab30a698c169dc4fd5752359c2c.jpg",
};

export default class SearchBooks extends Component {
  constructor() {
    super();
    this.state = {
      query: null,
      dataSource: [],
      dataBackup: [],
    };
  }

  componentDidMount() {
    var data = [
      {
        name: "Don Quixote",
        author: "Miguel de Cervantes",
        img: "https://www.bookyards.com/images/book_covers/Don%20Quixote%20by%20Miguel%20de%20Cervantes.jpg",
        description:
          "Don Quixote is a Spanish epic novel by Miguel de Cervantes. Originally published in two parts, in 1605 and 1615, its full title is The Ingenious Gentleman Don Quixote of La Mancha or, in Spanish, El ingenioso hidalgo don Quijote de la Mancha",
        press: () => this.props.navigation.navigate("donQuixoteBook"),
      },
      {
        name: "Hamlet",
        author: "William Shakespeare",
        img: "https://imusic.b-cdn.net/images/item/original/792/9781398807792.jpg?william-shakespeare-2022-hamlet-paperback-book&class=scaled",
        description:
          "The Tragedy of Hamlet, Prince of Denmark, often shortened to Hamlet, is a tragedy written by William Shakespeare sometime between 1599 and 1601. It is Shakespeare's longest play, with 29,551 words.",
        press: () => this.props.navigation.navigate("hamletBook"),
      },
      {
        name: "Rich Dad Poor Dad",
        author: "Robert T. Kiyosaki",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAjLYv7r7ez9hCyU7G0-M9Yc32HsZE0FPlKCVsIGb0KiCksc_4-Bb1dtkv29IsRiSPxrw&usqp=CAU",
        description:
          "Rich Dad Poor Dad is a 1997 book written by Robert T. Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy, financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence.",
        press: () => this.props.navigation.navigate("richDadPoorDadBook"),
      },
      {
        name: "Madol Duwa",
        author: "Martin Wickramasinghe",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/MadolDoova.jpg/220px-MadolDoova.jpg",
        description:
          "Madol Doova Sinhala: මඩොල් දූව is a children's novel and coming-of-age story written by Sri Lankan writer Martin Wickramasinghe and first published in 1947. The book recounts the misadventures of Upali Giniwella and his friends on the Southern coast of Sri Lanka during the 1890s",
        press: () => this.props.navigation.navigate("madolDuwaBook"),
      },
      {
        name: "Hath Pana",
        author: "Kumaratunga Munidasa",
        img: "https://ae85df921b92073b52e8-a126a45a4c59e90797d94cd877fbe744.ssl.cf3.rackcdn.com/books/cover/uc-54a0e214e8221.jpg",
        description:
          "Hath pana which is a wonderful story about Neraluwe village leader Kusal Hami’s stupid son ‘Kiri Hami’. ‘Hath pana’ is a masterpiece that delighted the childhood world of the creator Kumaratunga Munidasa who was awarded the title of ‘Helaye Maha Isi’. Translation of such valuable children’s story books should be of immense help to our young readers to create literacy interest in them, improve their knowledge in English and also develop reading habits which are feared to be on the wane.",
        press: () => this.props.navigation.navigate("hathPanaBook"),
      },
      {
        name: "Jerusalem",
        author: "Alan Moore",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7LJGqVBNrktLCQo73y7_MTvIuuNN3D0_ARa7cwjzsz49aWqnR_3OoSM7u4_B8L0bIxM&usqp=CAU",
        description:
          "Jerusalem is a novel by British author Alan Moore, wholly set in and around the author's home town of Northampton, England. Combining elements of historical and supernatural fiction and drawing on a range of writing styles, the author describes it as a work of 'genetic mythology'.",
        press: () => this.props.navigation.navigate("jerusalemBook"),
      },
    ];

    this.setState({
      dataBackup: data,
      dataSource: data,
    });
  }

  filterItem = (event) => {
    var query = event.nativeEvent.text;
    this.setState({
      query: query,
    });
    if (query == "") {
      this.setState({
        dataSource: this.state.dataBackup,
      });
    } else {
      var data = this.state.dataBackup;
      query = query.toLowerCase();
      data = data.filter((l) => l.name.toLowerCase().match(query));

      this.setState({
        dataSource: data,
      });
    }
  };

  separator = () => {
    return (
      <View style={{ height: 10, width: "100%", backgroundColor: "#e5e5e5" }} />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TouchableHighlight style={styles.backBtn}>
          <Text
            onPress={() => this.props.navigation.navigate("dashboard")}
            style={styles.backBtnTxt}
          >
            &#x276E; 
          </Text>
        </TouchableHighlight>
        <View style={styles.header}>
          <TextInput
            placeholder="Enter Book Name"
            placeholderTextColor="gray"
            value={this.state.query}
            onChange={this.filterItem.bind(this)}
            style={styles.input}
          />
        </View>

        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={() => this.separator()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={item.press}>
                <View style={styles.bookContainer}>
                  <Image style={styles.image} source={{ uri: item.img }} />
                  <View style={styles.dataContainer}>
                    <Text numberOfLines={2} style={styles.title}>
                      {item.name}
                    </Text>
                    <Text style={styles.author}>{item.author}</Text>
                    <Text numberOfLines={4} style={styles.description}>
                      {item.description}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    width: "100%",
    backgroundColor: "#7d5fff",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  input: {
    height: 45,
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 5,
    paddingLeft: 20,
    marginBottom:15
  },
  bookContainer: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "#d1d8e0",
  },
  image: {
    height: 150,
    width: 100,
    marginLeft: 5,
  },
  dataContainer: {
    padding: 15,
    paddingTop: 5,
    width: 250,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  description: {
    fontSize: 16,
    color: "gray",
    marginTop: 10,
  },
  author: {
    fontSize: 16,
  },
  backBtn: {
    backgroundColor: "#7d5fff",
  },
  backBtnTxt: {
    marginTop: 25,
    marginLeft: 13,
    fontSize: 30,
    fontWeight: "500",
    color: "#ffb142",
  },
});

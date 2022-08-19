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
  ScrollView,
  Image,
  TouchableHighlight,
} from "react-native";

export default class Dashboard extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.header}>
            <TouchableHighlight style={styles.backBtn}>
              <Text
                onPress={() => this.props.navigation.navigate("login")}
                style={styles.backBtnTxt}
              >
                &#x276E;
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.searchBtn}>
              <Text
                onPress={() => this.props.navigation.navigate("searchBooks")}
                style={styles.searchBtnTxt}
              >
                Search
              </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.exploreContainer}>
            <View>
              <Text style={styles.exploreHeading}>Explore</Text>
            </View>
            <View style={{ height: 190 }}>
              <ScrollView horizontal={true}>
                <View style={styles.exploreGrid}>
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate("madolDuwaBook")
                      }
                    >
                      <Text style={styles.exploreHeadTxt}>Madol Duwa</Text>
                      <Text style={styles.exploreTxt}>
                        Martin Wickramasinghe
                      </Text>
                      <Text style={styles.exploreStarRate}>
                        Ratings : &#9733; &#9733; &#9733; &#9733; &#9734;
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Image
                    style={styles.exploreImg}
                    source={{
                      uri: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/MadolDoova.jpg/220px-MadolDoova.jpg",
                      height: 130,
                      width: 100,
                    }}
                  />
                </View>

               
                  <View style={[styles.exploreGrid, styles.bcgColor1]}>
                    <View>
                    <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("hathPanaBook")}
                >
                      <Text style={styles.exploreHeadTxt}>Hath Pana</Text>
                      <Text style={styles.exploreTxt}>
                        Kumaratunga Munidasa
                      </Text>
                      <Text style={styles.exploreStarRate}>
                        Ratings : &#9733; &#9733; &#9733; &#9734; &#9734;
                      </Text>
                      </TouchableOpacity>
                    </View>
                    <Image
                      style={styles.exploreImg}
                      source={{
                        uri: "https://ae85df921b92073b52e8-a126a45a4c59e90797d94cd877fbe744.ssl.cf3.rackcdn.com/books/cover/uc-54a0e214e8221.jpg",
                        height: 130,
                        width: 100,
                      }}
                    />
                  </View>
                
               
                  <View style={[styles.exploreGrid, styles.bcgColor2]}>
                    <View>
                    <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("richDadPoorDadBook")
                  }
                >
                      <Text style={styles.exploreHeadTxt}>
                        Rich Dad Poor Dad
                      </Text>
                      <Text style={styles.exploreTxt}>Robert T. Kiyosaki</Text>
                      <Text style={[styles.exploreStarRate, styles.marginSet]}>
                        Ratings : &#9733; &#9733; &#9733; &#9733; &#9734;
                      </Text>
                      </TouchableOpacity>
                    </View>
                    <Image
                      style={styles.exploreImg}
                      source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAjLYv7r7ez9hCyU7G0-M9Yc32HsZE0FPlKCVsIGb0KiCksc_4-Bb1dtkv29IsRiSPxrw&usqp=CAU",
                        height: 130,
                        width: 100,
                      }}
                    />
                  </View>
               
              </ScrollView>
            </View>
          </View>
          <View style={styles.popularContainer}>
            <View>
              <Text style={styles.popularHeading}>Popular Now</Text>
            </View>
            <View style={{ height: 320 }}>
              <ScrollView horizontal={true}>
                <View style={[styles.popularGrid, styles.popbcgcol1]}>
                  <View>
                    <TouchableOpacity
                      underlayColor={"#535c68"}
                      onPress={() =>
                        this.props.navigation.navigate("hamletBook")
                      }
                    >
                      <Text style={styles.popularHeadTxt}>Hamlet</Text>
                      <Text style={styles.popularTxt}>William Shakespeare</Text>
                      <Text style={styles.popularStarRate}>
                        Ratings : &#9733; &#9733; &#9733; &#9733; &#9734;
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Image
                    style={styles.popularImg}
                    source={{
                      uri: "https://imusic.b-cdn.net/images/item/original/792/9781398807792.jpg?william-shakespeare-2022-hamlet-paperback-book&class=scaled",
                      height: 150,
                      width: 100,
                    }}
                  />
                </View>

                <View style={[styles.popularGrid, styles.popbcgcol2]}>
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate("donQuixoteBook")
                      }
                    >
                      <Text style={styles.popularHeadTxt}>Don Quixote</Text>
                      <Text style={styles.popularTxt}>Miguel de Cervantes</Text>
                      <Text style={styles.popularStarRate}>
                        Ratings : &#9733; &#9733; &#9733; &#9734; &#9734;
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Image
                    style={styles.popularImg}
                    source={{
                      uri: "https://www.bookyards.com/images/book_covers/Don%20Quixote%20by%20Miguel%20de%20Cervantes.jpg",
                      height: 150,
                      width: 100,
                    }}
                  />
                </View>

                <View style={[styles.popularGrid, styles.popbcgcol3]}>
                  <View>
                    <TouchableOpacity>
                      <Text style={styles.popularHeadTxt}>Atlas Shrugged</Text>
                      <Text style={styles.popularTxt}>Ayn Rand</Text>
                      <Text style={[styles.popularStarRate]}>
                        Ratings : &#9733; &#9733; &#9733; &#9733; &#9734;
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Image
                    style={styles.popularImg}
                    source={{
                      uri: "http://prodimage.images-bn.com/pimages/9780452286368_p0_v2_s1200x630.jpg",
                      height: 150,
                      width: 100,
                    }}
                  />
                </View>

                <View style={[styles.popularGrid, styles.popbcgcol4]}>
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate("jerusalemBook")
                      }
                    >
                      <Text style={styles.popularHeadTxt}>Jerusalem</Text>
                      <Text style={styles.popularTxt}>Alan Moore</Text>
                      <Text style={[styles.popularStarRate]}>
                        Ratings : &#9733; &#9733; &#9733; &#9733; &#9734;
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Image
                    style={styles.popularImg}
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7LJGqVBNrktLCQo73y7_MTvIuuNN3D0_ARa7cwjzsz49aWqnR_3OoSM7u4_B8L0bIxM&usqp=CAU",
                      height: 150,
                      width: 100,
                    }}
                  />
                </View>
              </ScrollView>
            </View>
          </View>

          <View style={styles.searchContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("searchBooks")}
            >
              <View style={styles.searchGrid}>
                <View>
                  <Text style={styles.searchHeadTxt}>
                    Search Your Favourite Book
                  </Text>
                </View>
                <Image
                  style={styles.searchImg}
                  source={{
                    uri: "https://image.winudf.com/v2/image1/Y29tLnJlYWRib29rc29ubGluZS5zZWFyY2guZWJvb2tfc2NyZWVuXzBfMTU2NDU5MTQ3MF8wNjc/screen-0.jpg?fakeurl=1&type=.jpg",
                    height: 140,
                    width: 100,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  exploreContainer: {
    backgroundColor: "#7d5fff",
  },
  exploreGrid: {
    backgroundColor: "#4b4b4b",
    width: 350,
    height: 160,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    borderRadius: 15,
    shadowColor: "#2f3542",
    shadowOffset: { width: 3, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },
  exploreHeading: {
    marginLeft: 15,
    marginTop: 5,
    fontSize: 23,
    fontWeight: "700",
    color: "#ffcccc",
  },
  exploreHeadTxt: {
    fontSize: 30,
    marginLeft: 10,
    marginTop: 15,
    color: "white",
    fontWeight: "600",
    maxWidth: 200,
  },
  exploreTxt: {
    margin: 10,
    fontSize: 15,
    color: "#bdc3c7",
    fontWeight: "500",
  },
  exploreImg: {
    margin: 10,
    borderRadius: 10,
  },
  exploreStarRate: {
    margin: 10,
    marginTop: 30,
    fontSize: 17,
    color: "#f1c40f",
    fontWeight: "500",
  },
  bcgColor1: {
    backgroundColor: "#227093",
  },
  bcgColor2: {
    backgroundColor: "#b33939",
  },
  marginSet: {
    marginTop: 0,
  },
  popularContainer: {
    backgroundColor: "#ced6e0",
  },
  popularGrid: {
    backgroundColor: "#0652DD",
    width: 175,
    height: 280,
    flexDirection: "column-reverse",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
    borderRadius: 15,
    shadowColor: "#2f3542",
    shadowOffset: { width: 4, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 7,
  },
  popularHeading: {
    marginLeft: 15,
    marginTop: 10,
    fontSize: 23,
    fontWeight: "700",
    color: "#4b4b4b",
  },
  popularHeadTxt: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
    color: "white",
    fontWeight: "600",
  },
  popularTxt: {
    margin: 10,
    fontSize: 14,
    color: "#bdc3c7",
    fontWeight: "500",
  },
  popularImg: {
    margin: 10,
    borderRadius: 15,
  },
  popularStarRate: {
    margin: 10,
    marginTop: 10,
    fontSize: 13,
    color: "#f1c40f",
    fontWeight: "500",
  },
  popbcgcol1: {
    backgroundColor: "#574b90",
  },
  popbcgcol2: {
    backgroundColor: "#c44569",
  },
  popbcgcol3: {
    backgroundColor: "#2C3A47",
  },
  popbcgcol4: {
    backgroundColor: "#182C61",
  },
  backBtn: {
    backgroundColor: "#7d5fff",
  },
  backBtnTxt: {
    marginTop: 20,
    marginLeft: 13,
    fontSize: 30,
    fontWeight: "500",
    color: "#ffb142",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#7d5fff",
  },
  searchBtnTxt: {
    fontSize: 23,
    marginTop: 25,
    marginRight: 10,
    fontWeight: "500",
    color: "#ffb142",
  },
  searchContainer: {
    backgroundColor: "#4a69bd",
  },
  searchGrid: {
    backgroundColor: "#3dc1d3",
    width: 350,
    height: 160,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 15,
    shadowColor: "#2f3542",
    shadowOffset: { width: 3, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },
  searchHeadTxt: {
    fontSize: 30,
    marginLeft: 20,
    marginTop: 15,
    color: "white",
    fontWeight: "600",
    maxWidth: 165,
    textAlign: "justify",
  },
  searchImg: {
    margin: 10,
    borderRadius: 10,
  },
});

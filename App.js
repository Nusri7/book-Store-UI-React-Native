import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import BookDetails from "./components/jerusalemBook";
import Dashboard from "./components/dashboard";

import Login from "./components/login";
import SearchBooks from "./components/searchBooks";
import Signup from "./components/signup";
import HamletBook from "./components/hamletBook";
import JerusalemBook from "./components/jerusalemBook";
import DonQuixoteBook from "./components/donQuixote";
import HathPanaBook from "./components/hathPanaBook";
import MadolDuwaBook from "./components/madolDuwa";
import RichDadPoorDadBook from "./components/richDadPoorDad";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator(
  {
    login: {
      screen: Login,
      navigationOptions: {
        title: "",
        headerShown: false,
      },
    },
    signup: {
      screen: Signup,
      navigationOptions: {
        title: "Register",
        headerShown: false,
      },
      
    },
    dashboard: {
      screen: Dashboard,
      navigationOptions: {
        title: "",
        headerShown: false,
        headerTintColor: "blue",
      },
    },
    searchBooks: {
      screen: SearchBooks,
      navigationOptions: {
        title: "",
        headerShown: false,
      },
    },
    jerusalemBook: {
      screen: JerusalemBook,
      navigationOptions: {
        title: "",
        headerShown: false,
      },
    },
    hamletBook: {
      screen: HamletBook,
      navigationOptions: {
        title: "",
        headerShown: false,
      },
    },
    donQuixoteBook: {
      screen: DonQuixoteBook,
      navigationOptions: {
        title: "",
        headerShown: false,
      },
    },
    hathPanaBook: {
      screen: HathPanaBook,
      navigationOptions: {
        title: "",
        headerShown: false,
      },
    },
    madolDuwaBook: {
      screen: MadolDuwaBook,
      navigationOptions: {
        title: "",
        headerShown: false,
      },
    },
    richDadPoorDadBook: {
      screen: RichDadPoorDadBook,
      navigationOptions: {
        title: "",
        headerShown: false,
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: 45,
        backgroundColor: "#7d5fff",
      },
      headerTintColor: "black",
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

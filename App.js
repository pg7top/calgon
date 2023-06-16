import React, { Component } from "react";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import * as Font from "expo-font";
import {createSwitchNavigator,createAppContainer} from "react-navigation";
import BottomTabNavigator from "./components/BottomTabNavigator";



export default class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    email: "",
    password: ""
  };
}
}


handleLogin = () => {
  const { email, password } = this.state;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      this.props.navigation.navigate("BottomTab");
    })
    .catch(error => {
      Alert.alert(error.message);
    });
};


const AppContainer = createAppContainer(AppSwitchNavigator);

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       fontLoaded: false
//     };
//   }

//   async loadFonts() {
//     await Font.loadAsync({
//       Rajdhani_600SemiBold: Rajdhani_600SemiBold
//     });
//     this.setState({ fontLoaded: true });
//   }

//   componentDidMount() {
//     this.loadFonts();
//   }

//   render() {
//     const { fontLoaded } = this.state;
//     if (fontLoaded) {
//       return <BottomTabNavigator />;
//     }
//     return null;
//   }
// }

//import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import LogIn from './src/screens/LogIn';
import Home from './src/screens/Home';
import Anime from './src/components/Anime';
//import Navigation from './src/navigation';

const App = () => {
  return (
    <View >
      <LogIn />
    </View>
  );
};
//const App = () => {
  //return (
    //<SafeAreaView style={styles.root}>
      //<Navigation />
    //</SafeAreaView>
  //);
//};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;

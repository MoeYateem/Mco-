import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image } from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import Logo from '../../assets/mcologo.png';
import React, {useState, useEffect} from 'react';
import CustomInput from '../components/CustomInput';
import ButtonDesign from '../components/ButtonDesign';
import { Alert } from 'react-native';

const Generate = () => {
  fetch('https://animechan.vercel.app/api/random')
  .then(response => response.json())
  .then(quote => Alert.alert("Seize the day!", quote.anime+"\n"+"\n"+quote.quote+" -"+ quote.character)) 
  
};

const Home = () => {
  const[quote, setQuote] = useState({
    anime: null,
    character: null,
    quote: null
  });
  return (
    <View style={styles.base}>
      
        <ButtonDesign
        onPress={Generate}
        text="Generate Quote"
        />
        
      
    </View>
  );
};
const styles =StyleSheet.create({
    base:{
        padding:50 ,
        alignItems: 'center',
    },
    mlogo:{
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
      },
  });


export default Home;
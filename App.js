import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,ImageBackground } from 'react-native';
import { useState } from 'react';

export default function App() {
   const [quote ,setQuote]=useState()
  const onPressLearnMore = ()=>{
    fetch('https://luha.alwaysdata.net/api/')
    .then((res)=>{
      return res.json()
    }).
    then((data)=>{
      setQuote(data.citation)
    })
  }
  const image = { uri: "https://images2.alphacoders.com/788/thumb-1920-788976.jpg" };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>

      <Text style={styles.text} >{quote}</Text>
      <Button
        style={styles.button}
        borderRadius='100'
        onPress={onPressLearnMore}
        title="Citation"
        accessibilityLabel="Learn more about this purple button"
      />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color:'white',
    //height:'500',
  },
  text: {
    color: "white",
    fontSize:15,
    lineHeight: 15,
    fontWeight: "bold",
    padding:25,
    textAlign: "center",
    backgroundColor: "#000000c1"
  },
  button: {
    color: "red",
    backgroundColor:'red',
    borderRadius:25,

  },
  image: {
    flex: 1,
    height:'100%',
    width:'100%',
    justifyContent: "center"
  },
});

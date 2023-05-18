import *as React from "react"
import {StyleSheet, View, Image, ImageBackground,Text,TouchableOpacity,Dimensions} from 'react-native'
import ScreenWrapper from './ScreenWrapper'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Mulish_500Medium,
} from '@expo-google-fonts/mulish';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import {Card} from 'react-native-paper'
const ButtonLog =()=>{
   let [fontsLoaded, error] = useFonts({
    Mulish_500Medium,  
  })
const navigation = useNavigation();
const button = () => {navigation.navigate('Login');};
const button2 = () => {navigation.navigate('SignUp');};
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
return (
  <SafeAreaProvider>
  <ScreenWrapper>
    <View style={{width,height}}>
      <ImageBackground style={{
            flex: 1, height:"80%", justifyContent: "center", alignItems: "center",   
        }} source = {require("../assets/bgtrnp.png")}>
     <Image style={{width:"60%",height:"22%"}}source={require('../assets/tigentLogo.png')}/>
    
      <Text style={styles.text}> 
        Organize your daily activities
      </Text>

         <LinearGradient
        colors={['#FF3E89','#9584FF']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={styles.button3}
      >
          <TouchableOpacity onPress={button} style={styles.button1} >
             <Text style={styles.sign}> LOG IN </Text>  
            </TouchableOpacity>
          </LinearGradient>

         <LinearGradient
        colors={['#9584FF','#FF3E89']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={styles.button4}
      >
          <TouchableOpacity onPress={button2} style={styles.button1} >
             <Text style={styles.sign}> SIGN UP </Text>  
            </TouchableOpacity>
          </LinearGradient>

  </ImageBackground>
    </View>

  </ScreenWrapper>
  </SafeAreaProvider>
  );
}

export default ButtonLog;


const styles = StyleSheet.create({
  button1: {
    marginTop: 20,
    width:200,
    marginRight:80
  },
  text:{
    color:"black",
    fontSize:26,
    alignSelf:"center",
    fontFamily: "Mulish_500Medium",
    marginTop:220
  },
  button3:{
    marginTop: 40,
    width:200,
    marginLeft:110,
    borderRadius:20,
    marginRight:100
  },
  button4:{
    marginTop:20,
    width:200,
    marginLeft:110,
    borderRadius:20,
    marginRight:100
  },
    sign:{
    color:"white",
    fontSize:20,
    alignSelf:"center",
    marginTop: -10,
    marginBottom:12,
    fontFamily:"Mulish_500Medium",
  },

})
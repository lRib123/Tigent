import React,{useState} from 'react';
import {Button,  useTheme,HelperText} from 'react-native-paper'
import {StyleSheet, View, Image, ImageBackground,Text,TextInput,KeyboardAvoidingView,Platform,TouchableOpacity} from 'react-native'
import ScreenWrapper from './ScreenWrapper'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Mulish_500Medium,
} from '@expo-google-fonts/mulish';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import firebase from "firebase";

const LoginPage=()=>{
     let [fontsLoaded, error] = useFonts({
    Mulish_500Medium,  
  })

const navigation = useNavigation();
const button = () => {navigation.navigate('Home')}
const login = () => {navigation.navigate('Login')}

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword,settConfirmPassword] = useState('')
 const registerUser = (email, password,confirmPassword) => {
  if(password==confirmPassword){
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("User registered!");
        console.log(userCredential.user.uid)
        navigation.navigate('Login');
        firebase.database().ref("/users/" + userCredential.user.uid)
                .set({
                  email: userCredential.user.email,
                })
      })
      .catch(error => {
        alert(error.message);
      });
    }else{
      alert("The passwords are not equal");
    }
  };

  return(
 
    <SafeAreaProvider>
    <ScreenWrapper >
    <View>
      <ImageBackground style={styles.image}source={require('../assets/bgtrnp.png')}>
        <Text style={styles.text}>
          Welcome!
        </Text>
      <View >
        <View style={styles.sectionStyle}>
         
          <TextInput
            style={{flex: 1, marginLeft:15,fontFamily:"Mulish_500Medium"}}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            underlineColorAndroid="transparent"
            required
            placeholderTextColor="#7a827c"
          />
        </View>

      <View style={styles.sectionStyle2}>
        
          <TextInput
            style={{flex: 1,marginLeft:15,fontFamily:"Mulish_500Medium",}}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent" 
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor="#7a827c"   
          />
        </View> 
        <View style={styles.sectionStyle2}>
        
          <TextInput
            style={{flex: 1,marginLeft:15,fontFamily:"Mulish_500Medium",}}
            placeholder="Confirm Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent" 
            value={confirmPassword}
            onChangeText={(text) => settConfirmPassword(text)}  
            placeholderTextColor="#7a827c"  
          />
        </View>  


          <LinearGradient
        colors={['#FF3E89','#9584FF']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={styles.button1}
      >
           <TouchableOpacity onPress={()=>registerUser(email, password, confirmPassword)} style={styles.button1} >
             <Text style={styles.sign}> SIGN UP </Text>  
            </TouchableOpacity>
          </LinearGradient>
         
         <Text style={styles.dumb}>Already have an account?</Text>

        <TouchableOpacity onPress={login}>
          <Text style={{alignSelf:"center",fontFamily:"Mulish_500Medium",marginTop:5,color:"#9932CC",fontSize:15}}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  </ScreenWrapper>
  </SafeAreaProvider>
  );
}

export default LoginPage

const styles = StyleSheet.create({
    image:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",   
  },
  text:{
    fontSize:40,
    marginTop:150,
    color:"white",
    fontFamily:"Mulish_500Medium",
    alignSelf:"center"
  }, 
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 20,
    margin: 10,
    width:260, 
    marginTop:200,
    shadowColor: '#171717',
    shadowOffset: {width: -3, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
    sectionStyle2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 20,
    margin: 10,
    width:260, 
    shadowColor: '#171717',
    shadowOffset: {width: -3, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
    button1: {
    marginTop: 20,
    width:200,
    alignSelf:"center",
    borderRadius:20,
    alignContent:"center",
  },
  
  forgot:{
    color:"#9932CC",
    marginLeft:20,
    fontFamily:"Mulish_500Medium",
  },
  sign:{
    color:"white",
    fontSize:20,
    alignSelf:"center",
    marginTop: -10,
    marginBottom:12,
    fontFamily:"Mulish_500Medium",
  },
  dumb:{
    marginTop:8,
    alignSelf:"center",
    fontFamily:"Mulish_500Medium",
  }
})
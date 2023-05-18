
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';
//importing library to use Stopwatch and Timer
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import {Card,Searchbar} from 'react-native-paper';
import {State,inputReducer} from '../utils/index'
import {useNavigation} from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'; 

const initialState: State = {
  text: '',
};

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const App = () => {
  const navigation = useNavigation();
  const hp = () => {navigation.navigate("Home")}
  const setting = () => {navigation.navigate("Setting")}

    return (
      <View style={{width,height}}>
      
        <Text style={{marginTop:"20%",fontSize:30,fontFamily:"Mulish_500Medium",marginLeft:40}}>
          Change password
        </Text>

        <Text style={{fontSize:18,marginTop:50,marginLeft:45,fontFamily:"Mulish_500Medium"}}>Enter new password</Text>
        <Card style={{borderRadius:20,width:300,alignSelf:"center",marginTop:20}}>
        <TextInput placeholder="New password" secureTextEntry={true} style={{marginTop:5,marginLeft:20,height:50,alignContent:"center",}}/>
        </Card>
          <Text style={{fontSize:18,marginTop:50,marginLeft:45,fontFamily:"Mulish_500Medium"}}>Confirm password</Text>
         <Card style={{borderRadius:20,width:300,alignSelf:"center",marginTop:20}}>
        <TextInput placeholder="Confirm password" secureTextEntry={true} style={{marginTop:5,marginLeft:20,height:50,alignContent:"center",}}/>
        </Card>    
      

      <Card style={{position:'absolute', bottom:0,width,alignItems:"center"}}>
      <TouchableOpacity onPress={hp}>
        <Ionicons name="home" size={34} color="#9584FF" style={{marginTop:4,marginLeft:30}} />
      </TouchableOpacity>
        <TouchableOpacity onPress={setting}>
        <Ionicons name="settings" size={34} color="#9584FF" style={{marginTop:-38,alignSelf:"center"}}/>
        </TouchableOpacity>
        <MaterialIcons name="dashboard" size={34} color="#9584FF" style={{marginTop:-39,marginLeft:270}}/>
        <TouchableOpacity onPress={hp}>
        <Text style={{fontFamily:"Mulish_500Medium",marginLeft:27}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {setting}>
        <Text style={{fontFamily:"Mulish_500Medium",alignSelf:"center",marginTop:-18}}>Settings</Text>
        </TouchableOpacity>
        <Text style={{fontFamily:"Mulish_500Medium",marginLeft:250,marginTop:-18}}>Dashboard</Text>
      </Card>
       
      </View>

  );
};

export default App

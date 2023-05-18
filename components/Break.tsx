import React, { useState } from 'react';
import { Text, View,TouchableOpacity,Dimensions,TouchableHighlight } from 'react-native';
import {Card} from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { EvilIcons } from '@expo/vector-icons'; 
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height 

export default function FacebookButton() {
const navigation = useNavigation()
const hp = () => {navigation.navigate("Home")}
const dashboard = () => {navigation.navigate('Dashboard')}
const brea = () => {navigation.navigate("Pomodoro")}
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(300000);
  const [resetTimer, setResetTimer] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
      }}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#9584FF','#FF3E89']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: height,
        }}    
      >

    <Text style={{textAlign: 'center',
    fontSize: 50,
    marginTop:140,
    color:"white",
    fontFamily:"Mulish_500Medium"}}>
          Break time
        </Text>

         <Timer
            totalDuration={timerDuration}
            seconds
            start={isTimerStart}
            reset={resetTimer}
            options={options}
            handleFinish={() => {
              alert("Break time is over! Time to go back to work.");
            }}
            //can call a function On finish of the time
            getTime={(time) => {
              console.log(time);
            }}
          />
          <TouchableHighlight
            onPress={() => {
              setIsTimerStart(!isTimerStart);
              setResetTimer(false);
              
            }}>
              {!isTimerStart ? 
              <Ionicons name="md-play-circle" size={54} color="white" style={{marginLeft:145}}/>
              : 
              <Ionicons name="md-pause-circle" size={54} color="white" style={{marginLeft:145}}/>
              }
             
      
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              setIsTimerStart(false);
              setResetTimer(true);
            }}>
            <View style={{marginLeft:210,marginTop:-55}}>
            <MaterialIcons name="replay-circle-filled" size={54} color="white" />
            </View>
          </TouchableHighlight>

          <Text style={{marginBottom:10,marginTop:50,fontFamily:"Mulish_500Medium",color:"white",fontSize:30,alignSelf:"center"}}>Work</Text>

          <TouchableOpacity onPress={brea}>
          <EvilIcons name="arrow-left" size={34} color="white" style={{marginTop:-40,marginLeft:250}}/>
          </TouchableOpacity>
          
      </LinearGradient>


          <Card
            style={{
              position: 'absolute',
              bottom: 0,
              width,
              alignItems: 'center',
              height:70
            }}>
            <TouchableOpacity onPress={hp}>
              <Ionicons
                name="home"
                size={34}
                color="#9584FF"
                style={{marginTop:10,marginLeft:-10}}
              />
            </TouchableOpacity>
          
          <TouchableOpacity onPress={dashboard}>
            <MaterialIcons
              name="dashboard"
              size={34}
              color="#9584FF"
              style={{marginTop:-34,marginLeft:155}}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={hp}>
              <Text style={{fontFamily:"Mulish_500Medium",color:"#9584FF",marginLeft:-10}}>
                Home
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={dashboard}>
            <Text
              style={{fontFamily:"Mulish_500Medium",marginTop:-17,marginLeft:135,color:"#9584FF"}}>
              Dashboard
            </Text>
            </TouchableOpacity>
          </Card>
    </View>
  );
}

const options = {
  container: {
    padding: 5,
    borderRadius: 5,
    width,
    alignItems: 'center',
    marginTop:150
  },
  text: {
    fontSize: 60,
    color: '#FFF',
    marginLeft: 7,
  },
};
import React from 'react'
import {Text,View,ScrollView,TouchableOpacity,Dimensions} from 'react-native'
import {Card} from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {
  Mulish_500Medium,
} from '@expo-google-fonts/mulish';
import { useNavigation } from '@react-navigation/native';
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
const Dashboard=()=>{
  const navigation = useNavigation()
    const hp = () => {
    navigation.navigate('Home');
  };
  return(
    <View style={{width,height,flex:1 }}>
    <ScrollView style={{paddingBottom:150}}>
      <Text style={{marginTop:80,marginLeft:30,fontSize:40,fontFamily:"Mulish_500Medium"}}>
        Tips
      </Text>

      <Card style={{marginTop:40,width:280,alignSelf:"center",height:260,borderRadius:20}}>
        <Text style={{marginTop:20,marginLeft:20,fontSize:20,fontWeight:"bold",color:"#9584FF"}}>
        How to organize yourself
        </Text>
    <Text style={{marginLeft:20,marginTop:20,fontFamily:"Mulish_500Medium",fontSize:17}}>1. Set goals</Text>
    <Text style={{marginLeft:20,marginTop:20,fontFamily:"Mulish_500Medium",fontSize:17}}>2. Create a to-do list</Text>
    <Text style={{marginLeft:20,marginTop:20,fontFamily:"Mulish_500Medium",fontSize:17}}>3. Use a timer</Text>
    <Text style={{marginLeft:20,marginTop:20,fontFamily:"Mulish_500Medium",fontSize:17}}>4. Take breaks</Text>
     <Text style={{marginLeft:20,marginTop:20,fontFamily:"Mulish_500Medium",fontSize:17}}>5. Reduce distractions</Text>
      </Card>

        <Card style={{marginTop:40,width:280,alignSelf:"center",height:260,borderRadius:20}}>
        <Text style={{marginTop:20,marginLeft:20,fontWeight:"bold",color:"#9584FF",fontSize:20}}>
        How to establish goals
        </Text>
           <Text style={{marginLeft:20,marginTop:20,fontFamily:"Mulish_500Medium",fontSize:17}}>1. Have SMART goals</Text>
    <Text style={{marginLeft:20,marginTop:20,fontFamily:"Mulish_500Medium",fontSize:17}}>2. Create an action plan</Text>
    <Text style={{marginLeft:20,marginTop:20,fontFamily:"Mulish_500Medium",fontSize:17}}>3. Create a schedule </Text>
    <Text style={{marginLeft:20,marginTop:20,fontFamily:"Mulish_500Medium",fontSize:17}}>4. Set their priorities</Text>
     <Text style={{marginLeft:20,marginTop:20,fontFamily:"Mulish_500Medium",fontSize:17}}>5. Take action</Text>
      </Card>

            <Card style={{marginTop:40,width:280,alignSelf:"center",height:285,borderRadius:20,marginBottom:80}}>
        <Text style={{marginTop:20,marginLeft:20,fontWeight:"bold",color:"#9584FF",fontSize:20}}>
        How to use the Pomodoro technique
        </Text>

  <Text style={{marginLeft:20,marginTop:20,fontFamily:"Mulish_500Medium",fontSize:17}}>1. Set a 25 minute timer</Text>
    <Text style={{marginLeft:20,marginTop:20,fontFamily:"Mulish_500Medium",fontSize:17}}>2. Work!</Text>
    <Text style={{marginLeft:20,marginTop:20,fontFamily:"Mulish_500Medium",fontSize:17}}>3. Take a 5-minute break</Text>
    <Text style={{marginLeft:20,marginTop:20,fontFamily:"Mulish_500Medium",fontSize:17}}>4. Reward yourself</Text>
     <Text style={{marginLeft:20,marginTop:20,fontFamily:"Mulish_500Medium",fontSize:17}}>5. Repeat!</Text>

      </Card>
  </ScrollView>

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
          
            <MaterialIcons
              name="dashboard"
              size={34}
              color="#9584FF"
              style={{marginTop:-34,marginLeft:155}}
            />
            <TouchableOpacity onPress={hp}>
              <Text style={{fontFamily:"Mulish_500Medium",color:"#9584FF",marginLeft:-10}}>
                Home
              </Text>
            </TouchableOpacity>
            
            <Text
              style={{fontFamily:"Mulish_500Medium",marginTop:-17,marginLeft:135,color:"#9584FF"}}>
              Dashboard
            </Text>
          </Card>
    
    </View>
  )
}

export default Dashboard
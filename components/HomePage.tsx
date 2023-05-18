import *as React from 'react'
import { useState } from 'react'
import {StyleSheet, View, Image, ImageBackground,Text,TextInput,TouchableOpacity,ScrollView,Dimensions} from 'react-native'
import ScreenWrapper from './ScreenWrapper'
import {
  Paragraph,
  Card,
  useTheme,
  Checkbox,
  TouchableRipple,
  Button
} from 'react-native-paper';
import {
  Mulish_500Medium,
} from '@expo-google-fonts/mulish';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const HomePage=()=>{
  const [checkedNormal, setCheckedNormal] = React.useState<boolean>(false);
  const [checkedCustom, setCheckedCustom] = React.useState<boolean>(false);
  const [checkedCustom2, setCheckedCustom2] = React.useState<boolean>(false);
  const { isV3 } = useTheme();
  const TextComponent = isV3 ? Text : Paragraph;
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
    let [fontsLoaded, error] = useFonts({
    Mulish_500Medium,  
  })
const navigation = useNavigation();
const todo = () => {navigation.navigate('ToDo');};
const dashboard = () => {navigation.navigate('Dashboard')}
const pomodoro = () => {navigation.navigate('Pomodoro');};
const goals = () => {navigation.navigate('Goals');};

const annotations = () => {navigation.navigate('Annotations');};
const home = () => {navigation.navigate('Home');};
  const width = Dimensions.get('screen').width
  const height = Dimensions.get('screen').height
  return (
    <SafeAreaProvider>
    <ScreenWrapper>
      <View style={{flex:1,height,width}}>
      <ScrollView> 
        <Text style={styles.title}>
          Hello!
        </Text>
      

  <TouchableOpacity onPress = {todo}>
        <LinearGradient
        colors={['#9584FF','#FF3E89']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={styles.card2}
      >    
          <Text style={styles.text2}>
            To do
          </Text>       

        </LinearGradient>
</TouchableOpacity>
        <Text style={styles.org}> Organize </Text>
       
      
      <Card style={styles.card4}>
        <Text style={styles.text3}>
          Pomodoro
        </Text>
        <TouchableOpacity onPress = {pomodoro}>
        <Ionicons name = "timer" color = "white" size = {62} style={styles.icon}/>  
        </TouchableOpacity>
      </Card>
      <Card style={styles.card5}>
        <Text style={styles.text3}>
          Goals
        </Text>
        <TouchableOpacity onPress = {goals}>
        <Feather name = "target" color = "white" size = {62} style={styles.icon}/>
        </TouchableOpacity>     
      </Card>
   

      <TouchableOpacity onPress={annotations}>
      <Card style={styles.annotations}>
        <Text style={styles.text3}>
          Annotations
        </Text>
      </Card>
      </TouchableOpacity>
</ScrollView>
          <Card
            style={{
              position: 'absolute',
              bottom: 0,
              width,
              alignItems: 'center',
              height:70,
              backgroundColor:"white"
            }}>
            <TouchableOpacity onPress={home}>
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
            <TouchableOpacity onPress={home}>
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
      </ScreenWrapper>
    </SafeAreaProvider>
  )
}

export default HomePage

const styles = StyleSheet.create({
  title:{
    alignSelf:'center',
    marginTop:"20%",
    fontSize:40,
    color:"black",
    fontFamily:"Mulish_500Medium",
  },

  card:{
    marginTop:20,
    alignSelf:'center',
    width:300,
    height:30,
    borderRadius:20,
    alignItems:"center",
    alignContent:"center",
    
  },
  card2:{
    marginTop:45,
    width:"90%",
    height:"50%",
    alignSelf:'center',
    alignItems:"center",
    backgroundColor:"white",
    shadowColor: '#171717',
    shadowOffset: {width: -3, height: 10},
    shadowOpacity: 0.6,
    shadowRadius: 20,
    borderRadius:20,
  },
  card4:{
    marginLeft:30,
    width:"40%",
    borderRadius:20,
    alignItems:"center",
    height:120,
    backgroundColor:"#9584FF",
    shadowColor: '#171717',
    shadowOffset: {width: -3, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 20,
    marginTop:20
  },
  text2:{
    marginTop:40,
    alignSelf:'center',
    fontFamily:"Mulish_500Medium",
    color:"white",
    fontSize:50
  },
  text3:{
    marginTop:5,
    color:"white",
    fontFamily:"Mulish_500Medium",
    fontSize:18
  },
   act:{
    marginTop:2,
    alignSelf:'center',
    fontFamily:"Mulish_500Medium",
    color:"black",
    fontSize:20
  },
  card5:{
    marginTop:-120,
    marginLeft:210,
    width:"40%",
    borderRadius:20,
    alignItems:"center",
    height:120,
    backgroundColor:"#9584FF",
      shadowColor: '#171717',
    shadowOffset: {width: -3, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  annotations:{ 
    marginLeft:"5%",
    marginTop:30,
    alignItems:'center',
    height:"60%",
    backgroundColor:"#FF3E89",
    borderRadius:20,
    marginBottom:80,
    fontFamily:"Mulish_500Medium",
    width:"90%"
  },
  org:{
    marginTop:-80,
    marginLeft:20,
    fontSize:20,
    fontFamily:"Mulish_500Medium",
  },
  icon:{
    flex:1,
    alignSelf:"center",
    marginTop:9
  },

})


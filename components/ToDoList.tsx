import * as React from 'react';
import {StyleSheet, View, Image, ImageBackground,Text,TextInput, TouchableOpacity, ScrollView,StatusBar,Dimensions} from 'react-native'
import ScreenWrapper from './ScreenWrapper'
import { DataTable, Card, FAB,Button, useTheme } from 'react-native-paper';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
type ButtonVisibility = {
  [key: string]: boolean | undefined;
};
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons'; 
import {
  Mulish_500Medium,
} from '@expo-google-fonts/mulish';
import { useNavigation } from '@react-navigation/native';
  const width = Dimensions.get('screen').width
  const height = Dimensions.get('screen').height

const ToDo=()=>{
  const [visible, setVisible] = React.useState<ButtonVisibility>({});
  const { isV3 } = useTheme();
  const _toggleDialog = (name: string) => () =>
    setVisible({ ...visible, [name]: !visible[name] });
  const _getVisible = (name: string) => !!visible[name];
  const navigation = useNavigation();
  const idea = () => {navigation.navigate('Idea1')};
  const work = () => {navigation.navigate('Work');};
  const project = () => {navigation.navigate('Project');};
  const hp = () => {navigation.navigate('Home');};
  const dashboard = () => {navigation.navigate('Dashboard')}
      let [fontsLoaded, error] = useFonts({
    Mulish_500Medium,  
  })
  return(
    <PaperProvider>
      <View style={{flex:1,width,height}}>
      <ScrollView>
       <LinearGradient
        colors={['#9584FF','#FF3E89']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={styles.card2}
      > 
    <Card style={{backgroundColor:"transparent"}}>
      <Text style={styles.title}>
      To Do 
      </Text>
      </Card>
      </LinearGradient>
      <Text style={styles.choose}>
        Choose activity 
      </Text>
 
      
      <Card style={styles.card}>
        <Image style={styles.idea} source={require('../assets/ideaIcon.png')}></Image>
        <Text style={styles.text}>Idea</Text>
        <TouchableOpacity onPress={idea}>
           <MaterialIcons name="keyboard-arrow-right" size={34} color="black" 
        style={{marginLeft:250,marginTop:-10}}/>
        </TouchableOpacity>
      </Card>

       <Card style={styles.card}>
        <Image style={styles.work} source={require('../assets/work.png')}></Image>
        <Text style={styles.text1}>Work</Text>
        <TouchableOpacity onPress={work}>
           <MaterialIcons name="keyboard-arrow-right" size={34} color="black" 
        style={{marginTop:-10,marginLeft:250}}/>
        </TouchableOpacity>
      </Card>

      <Card style={styles.card}>
        <Image style={styles.idea} source={require('../assets/project1.png')}></Image>
        <Text style={styles.text}>Project</Text>
        <TouchableOpacity onPress={project}>
          <MaterialIcons name="keyboard-arrow-right" size={34} color="black" 
        style={{marginTop:-10,marginLeft:250}}/>
        </TouchableOpacity>
      </Card>


   
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
    </PaperProvider>

  )
}

export default ToDo


const styles = StyleSheet.create({
  image:{
    flex: 1,
    height:200,
    justifyContent: "center",
  },
  title:{
    marginRight:"40%",
    marginTop: "50%",
    fontSize:60,
    color:"white",
    fontFamily:"Mulish_500Medium"
  },
  choose:{
    marginTop:50,
    marginLeft:20,
    fontSize:20,
    fontFamily:"Mulish_500Medium"
  },
  fab:{
    position: 'absolute',
    right: 16,
    bottom:-150,
    backgroundColor:"#9584FF",
    marginBottom:50,
    height:55,
    width:55
  },
  card:{
    alignSelf: "center",
    marginTop:20,
    width:300,
    alignItems:'center',
    height:80,
    backgroundColor:"#9584FF",
    borderRadius:20
  },
  scroll:{
    width: '100%',
    height: 630,
    paddingTop: StatusBar.currentHeight,
  },
  idea:{
    height:70,
    width:50,
    marginRight:210,
    marginTop:5
  },
  text:{
    marginTop:-60,
    marginLeft:70,
    fontSize:18,
    fontFamily:"Mulish_500Medium"
  },
  next:{
    width:20,
    height:20,
    marginLeft:250,
    marginTop:-5
  },
  work:{
    width:55,
    height:55,
    marginTop:12
  },
  text1:{
    marginTop:-50,
    marginLeft:70,
    fontSize:18
  },
 card2:{
    width,
    height:"40%",
    alignSelf:'center',
    alignItems:"center",
    backgroundColor:"white",
    shadowColor: '#171717',
    shadowOffset: {width: -3, height: 10},
    shadowOpacity: 0.6,
    shadowRadius: 20,
  },
})
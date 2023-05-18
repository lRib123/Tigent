import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
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
  ScrollView,
  TextInput,
} from 'react-native';
//importing library to use Stopwatch and Timer
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { Card, Provider } from 'react-native-paper';
import { State, inputReducer } from '../utils/index';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const initialState: State = {
  text: '',
};

type ButtonVisibility = {
  [key: string]: boolean | undefined;
};

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const App = ({ navigation, route }) => {
  const [show,setShow] = useState(false)
  const [visible, setVisible] = React.useState<ButtonVisibility>({});
  const hp = () => {
    navigation.navigate('Home');
  };
  const dashboard = () => {
    navigation.navigate('Dashboard');
  };
  const [state, dispatch] = React.useReducer(inputReducer, initialState);
  const _toggleDialog = (name: string) => () =>
    setVisible({ ...visible, [name]: !visible[name] });
  const _getVisible = (name: string) => !!visible[name];

  const [goals, setGoals] = useState([]);

  useEffect(() => {
    loadGoals();
  }, []);

  const loadGoals = async () => {
    try {
      const storedGoals = await AsyncStorage.getItem('annotations');
      if (storedGoals !== null) {
        setGoals(JSON.parse(storedGoals));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddGoal = async () => {
    const newGoal = {
      id: Math.random().toString(36).substring(7),
      name: '',
      priority: 'low',
      text2: '',
    };
    const updatedGoals = [...goals, newGoal];
    setGoals(updatedGoals);
    await AsyncStorage.setItem('annotations', JSON.stringify(updatedGoals));
  };

  const handleGoalNameChange = async (id, name) => {
    const updatedGoals = goals.map((goal) => {
      if (goal.id === id) {
        return { ...goal, name };
      }
      return goal;
    });
    setGoals(updatedGoals);
    await AsyncStorage.setItem('annotations', JSON.stringify(updatedGoals));
  };
  const handleRemoveGoal = async (id) => {
    const updatedGoals = goals.filter((goal) => goal.id !== id);
    setGoals(updatedGoals);
    await AsyncStorage.setItem('annotations', JSON.stringify(updatedGoals));
  };

  const handleCollapse=async(id)=>{
    const updatedGoals = goals.map((goal) => {
      if (goal.id === id) {
        setShow(!show)
        return { ...goal, show };
      }
      return goal;
    });
    setShow(updatedGoals);
    await AsyncStorage.setItem('annotations', JSON.stringify(updatedGoals));
  }

  return (
    <Provider>
      <View style={{ width, height }}>
        <Text
          style={{
            marginTop: '20%',
            fontSize: 30,
            fontFamily: 'Mulish_500Medium',
            marginLeft: 20,
          }}>
          Your folders
        </Text>

        <Card
          style={{
            marginTop: 20,
            width: '90%',
            marginLeft: 20,
            height: '90%',
            backgroundColor: '#FF3E89',
            borderRadius: 20,
          }}>
          <Text></Text>

          <TouchableOpacity onPress={handleAddGoal}>
            <Card
              style={{
                width: '25%',
                marginLeft: 20,
                marginTop: 20,
                height: 90,
                backgroundColor:"white"
              }}>
             
              <Entypo 
                 size={44}
                color="black"
                style={{ alignSelf: 'center', marginTop: 25 }}
                name="add-to-list" 
                />
            </Card>
          </TouchableOpacity>
          <ScrollView>
            {goals.map((goal) => {
              return (
                <View>
                  <Card
                    style={!show?{
                      marginTop: 30,
                      width: 300,
                      alignSelf: 'center',
                      borderRadius: 20,
                      height:'auto',
                      backgroundColor:"white"
                    }:{
                      marginTop: 30,
                      width: 300,
                      alignSelf: 'center',
                      borderRadius: 20,
                      height:30}}>
                    <ScrollView>
                      <TextInput
                        placeholder="Write your annotations here"
                        value={goal.name}
                        onChangeText={(text) =>
                          handleGoalNameChange(goal.id, text)
                        }
                        multiline
                        style={{ marginLeft: 10, }}
                      />
                      <TouchableOpacity
                        onPress={() => handleRemoveGoal(goal.id)}>
                        <FontAwesome
                          style={{ marginLeft:270,marginBottom:10}}
                          name="trash-o"
                          size={24}
                          color="black"
                        />
                      </TouchableOpacity>
                     
                    </ScrollView>
                  </Card>
                </View>
              );
            })}
          </ScrollView>
        </Card>
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
    </Provider>
  );
};

const MyPageButton = () => {
  return (
    <Stack.Screen name="Page" component={App} initialParams={{ count: 1 }} />
  );
};

export default App;

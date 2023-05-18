import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  DatePickerIOS,
  Platform
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Card, useTheme, ProgressBar, Button } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useRef, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons'
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
import DateTimePicker from '@react-native-community/datetimepicker';
const Idea = () => {
  const navigation = useNavigation();
  const dashboard = () => {navigation.navigate('Dashboard')}
  const home = () => {
    navigation.navigate('Home');
  };
  const [idea, setIdea] = useState([]);
  const [inputData, setInputData] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [date,setDate] = useState(new Date())
  const [mode,setMode] = useState('time')
  useEffect(() => {
    const getSavedData = async () => {
      const savedInputData = await AsyncStorage.getItem('work');
      if (savedInputData !== null) {
        setInputData(JSON.parse(savedInputData));
      }
    };

    getSavedData();
  }, []);

  useEffect(() => {
    const inputsForDate = inputData[selectedDate.toDateString()] || [];
    setIdea(inputsForDate);
  }, [selectedDate, inputData]);
  useEffect(() => {
    const saveData = async () => {
      await AsyncStorage.setItem('work', JSON.stringify(inputData));
    };
    saveData();
  }, [inputData]);

  const handleAddIdea = async () => {
    const newIdea = {
      id: Math.random().toString(36).substring(7),
      name: '',
      priority: 'Incomplete',
      text2: '',
    };

    const updatedIdea = [...idea, newIdea];
    setIdea(updatedIdea);
    await AsyncStorage.setItem('work', JSON.stringify(updatedIdea));
  };

  const handleText2Change = async (id, text) => {
    const updatedIdea = idea.map((ideas) => {
      if (ideas.id === id) {
        return { ...ideas, text2: text };
      }
      return ideas;
    });
    const newData = { ...inputData };
    newData[selectedDate.toDateString()] = updatedIdea;
    setInputData(newData);
  };
  const handlePriorityChange = async (id, priority) => {
    const updatedIdea = idea.map((ideas) => {
      if (ideas.id === id) {
        return { ...ideas, priority };
      }
      return ideas;
    });
    setIdea(updatedIdea);
    await AsyncStorage.setItem('work', JSON.stringify(updatedIdea));
  };

  const handleRemoveIdea = async (id) => {
    const updatedIdea = idea.filter((ideas) => ideas.id !== id);
    setIdea(updatedIdea);
    await AsyncStorage.setItem('work', JSON.stringify(updatedIdea));
  };
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <View style={{ flex: 1, width, height, paddingBottom: 100 }}>
          <LinearGradient
            colors={['#9584FF', '#FF3E89']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}>
            <Card
              style={{
                width,
                height: 200,
                backgroundColor: 'transparent',
                marginRight: 10,
              }}>
              <Text style={styles.title}>Work</Text>
              <TouchableOpacity
                style={{
                  marginTop: -25,
                  width: 100,
                  height: 35,
                  marginLeft: '70%',
                  borderRadius: 12,
                  backgroundColor: 'white',
                }}
                onPress={handleAddIdea}>
                <Text
                  style={{
                    marginTop: 7,
                    alignSelf: 'center',
                    fontFamily: 'Mulish_500Medium',
                    fontWeight: 'bold',
                  }}>
                  Add
                </Text>
              </TouchableOpacity>
            </Card>
          </LinearGradient>
          <Card
            style={{
              marginTop: -10,
              width,
              marginBottom: 100,
              borderTopLeftRadius: 40,
              height,
              backgroundColor: 'white',
            }}>

            <Card style={{marginTop:20,width:350,alignSelf:"center",borderRadius:20,backgroundColor:"#9584FF"}}>
            <DatePickerIOS
              date={selectedDate}
              onDateChange={setSelectedDate}
              mode="date"
              style={{ marginTop: 10, width: 300,alignSelf:"center",backgroundColor:"#9584FF" }}
            />
          </Card>
            <ScrollView persistentScrollbar={true} style={{paddingBottom:100}}>
              <View>
                {idea.map((ideas) => (
                  <View key={ideas.id} style={styles.goalContainer}>
                  <Card style={{marginTop:40,height:110,width:380,borderRadius:20,marginLeft:20,backgroundColor:"white" }}>
                      <TextInput
                        style={{marginTop:20,fontSize:20,marginLeft:20}}
                        placeholder="Enter task"
                        value={ideas.text2}
                        onChangeText={(text) =>
                          handleText2Change(ideas.id, text)
                        }
                        placeholderTextColor="#7a827c"
                      />
                      <Picker
                        style={{
                          width: 120,
                          backgroundColor: '#FF3E89',
                          borderColor: 'black',
                          borderRadius: 10,
                          height: 44,
                          marginTop: 10,
                          marginLeft: 10,
                        }}
                        itemStyle={{ height: 44, width: 150, fontSize: 15, alignSelf:"center" }}
                        selectedValue={ideas.priority}
                        onValueChange={(itemValue) =>
                          handlePriorityChange(ideas.id, itemValue)
                        }>
                        <Picker.Item label="Incomplete" value="Incomplete" />
                        <Picker.Item label="In progress" value="In progress" />
                        <Picker.Item label="Completed" value="Completed" />
                      </Picker>
                      <TouchableOpacity
                        onPress={() => handleRemoveIdea(ideas.id)}>
                        <FontAwesome style={{marginLeft:340,marginTop:-33}} name="trash-o" size={24} color="black" />
                      </TouchableOpacity>
                      
                    </Card>
                  </View>
                ))}
              </View>
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
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default Idea;
const styles = StyleSheet.create({
  title: {
    marginLeft: 20,
    marginTop: '20%',
    fontSize: 30,
    color: 'white',
    fontFamily: 'Mulish_500Medium',
  },
  gradient: {
    width,
    height: '22%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#171717',
    shadowOffset: { width: -3, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
  },

});

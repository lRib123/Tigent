import {StyleSheet, View, Image, ImageBackground,Text,TextInput, TouchableOpacity,ScrollView,Dimensions} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import {Card,useTheme,ProgressBar,Button } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  useState,
  useRef,
  useEffect
} from 'react';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native'
import {
  Mulish_500Medium,
} from '@expo-google-fonts/mulish';
  const width = Dimensions.get('screen').width
  const height = Dimensions.get('screen').height

const Idea=()=>{
  const navigation = useNavigation();
  const dashboard = () => {navigation.navigate('Dashboard')}
  const home = () => {navigation.navigate('Home');};
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    loadGoals();
  }, []);

  const loadGoals = async () => {
    try {
      const storedGoals = await AsyncStorage.getItem('goals');
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
      text2: ''
    };
    const updatedGoals = [...goals, newGoal];
    setGoals(updatedGoals);
    await AsyncStorage.setItem('goals', JSON.stringify(updatedGoals));
  };

  const handleGoalNameChange = async (id, name) => {
    const updatedGoals = goals.map((goal) => {
      if (goal.id === id) {
        return { ...goal, name };
      }
      return goal;
    });
    setGoals(updatedGoals);
    await AsyncStorage.setItem('goals', JSON.stringify(updatedGoals));
  };

  const handleText2Change = async (id, text) => {
    const updatedGoals = goals.map((goal) => {
      if (goal.id === id) {
        return { ...goal, text2: text };
      }
      return goal;
    });
    setGoals(updatedGoals);
    await AsyncStorage.setItem('goals', JSON.stringify(updatedGoals));
  };

  const handlePriorityChange = async (id, priority) => {
    const updatedGoals = goals.map((goal) => {
      if (goal.id === id) {
        return { ...goal, priority };
      }
      return goal;
    });
    setGoals(updatedGoals);
    await AsyncStorage.setItem('goals', JSON.stringify(updatedGoals));
  };

  const handleRemoveGoal = async (id) => {
    const updatedGoals = goals.filter((goal) => goal.id !== id);
    setGoals(updatedGoals);
    await AsyncStorage.setItem('goals', JSON.stringify(updatedGoals));
  };
  
  return(
     <PaperProvider>
    <SafeAreaProvider>
    <View style={{flex:1,width,height}}>
        <LinearGradient
        colors={['#9584FF','#FF3E89']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={styles.gradient}
      > 
       <Card style={{width,height:200,backgroundColor:"transparent",marginRight:10}}>
      <Text style={styles.title}>
        Goals
      </Text >
      <TouchableOpacity style={{marginTop:-25,width:100, height:35,marginLeft:"70%",borderRadius:12,backgroundColor:"white"}}onPress={handleAddGoal}><Text style={{marginTop:7,alignSelf:"center",fontFamily:"Mulish_500Medium",fontWeight:"bold"}}>Add</Text></TouchableOpacity>
      </Card>
  </LinearGradient>
     <Card style={{marginTop:-10, width, marginBottom:100, borderTopLeftRadius:40, height, backgroundColor:"white"}}> 
 
 <ScrollView persistentScrollbar={true} style={{paddingBottom:100}}>
      <View>
      {goals.map((goal) => (
        <View key={goal.id} style={styles.goalContainer}>
          <Card style={styles.card}>
          <ScrollView>
            <TextInput
              style={styles.textInput}
              placeholder="Enter goal name"
              value={goal.name}
              onChangeText={(text) => handleGoalNameChange(goal.id, text)}
              placeholderTextColor="#7a827c"
            />
               <TextInput
              style={{fontFamily:"Mulish_500Medium"}}
              placeholder="How will you achieve your goal?"
              value={goal.text2}
              numberOfLines={4}
              multiline
              onChangeText={(text) => handleText2Change(goal.id, text)}
              placeholderTextColor="#7a827c"
            />
            <Text style={{marginTop:30}}>Priority</Text>
            <Picker
              style={{width: 120, backgroundColor:"#FF3E89",borderColor: 'black',borderRadius:10,height:44,marginTop:10}}
         itemStyle={{height:44,width:120,fontSize:15}}
              selectedValue={goal.priority}
              onValueChange={(itemValue) => handlePriorityChange(goal.id, itemValue)}
            >
              <Picker.Item label="Low" value="low" />
              <Picker.Item label="Medium" value="medium" />
              <Picker.Item label="High" value="high" />
            </Picker>
            <TouchableOpacity onPress={() => handleRemoveGoal(goal.id)} >
            <FontAwesome style={{marginLeft:320,marginTop:-20}} name="trash-o" size={24} color="black" />
            </TouchableOpacity>
            </ScrollView>
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
}

export default Idea

const styles = StyleSheet.create({
  title:{
    marginLeft:20,
    marginTop:"20%",
    fontSize:30,
    color:"white",
    fontFamily:"Mulish_500Medium"
  },
  gradient:{
    width,
    height:"22%",
    alignSelf:'center',
    alignItems:"center",
    backgroundColor:"white",
    shadowColor: '#171717',
    shadowOffset: {width: -3, height: 10},
    shadowOpacity: 0.6,
    shadowRadius: 20,
  },
  card: {
    padding: 10,
    marginTop:30,
    width:360,
    alignSelf:"center",
    borderRadius:20,
    height:220,
    backgroundColor:"white" 
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius:20,
    fontFamily:"Mulish_500Medium"
  },
})
import './rwi';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/AssetExample';
import Login from './components/LoginScreen';
import HomePage from './components/HomePage';
import ToDo from './components/ToDoList';
import Idea1 from './components/Idea1';
const Stack = createNativeStackNavigator();
import Dashboard from './components/Dashboard'
import SignUp from './components/SignUp';
import Pomodoro from './components/Pomodoro';
import Break from './components/Break';
import Goals from './components/Goals';
import Annotations from './components/Annotations';
import Work from './components/Work'
import Project from './components/Project'
import firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
         <Stack.Screen name="AssetExample" component={HomeScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Annotations" component={Annotations}/>
         
        <Stack.Screen name="Idea1" component={Idea1} />
       
         <Stack.Screen name="Goals" component={Goals} />
         <Stack.Screen name="ToDo" component={ToDo} /> 
        <Stack.Screen name="Project" component={Project} />
        <Stack.Screen name="Work" component={Work} />
        <Stack.Screen name="Home" component={HomePage} />
       
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      
        <Stack.Screen name="Pomodoro" component={Pomodoro} />
        <Stack.Screen name="Break" component={Break} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

       

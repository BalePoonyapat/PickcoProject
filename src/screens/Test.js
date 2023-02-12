import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from 'react';
import { firebase } from "./config";






import 'react-native-gesture-handler';

import LoginScreens from "./src/screens/LoginScreens";
import Dashboard from "./src/screens/Dashboard";
import HomeScreen from "./src/screens/HomeScreen";
import MatchingScrren from "./src/screens/MatchingScreen";
import CourseScreen from "./src/screens/CourseScreen";
import HomeScreenStackNavigatior from "./src/components/Navigation";
import DetailCourse from "./src/screens/DetailCourse";
import CoperateListScreen from "./src/screens/CoperateListScreen";
import CoopScreen from "./src/screens/CoopScreen";
import Coperatedetails from "./src/screens/Coperatedetails";
import ProfileScreen from "./src/screens/ProfileScreen";
import Testfirebase from "./src/Testfirebase";






function App() {

  const Stack = createStackNavigator();

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {

    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [])

  if (!user) {
    return (
      <Stack.Navigator>

        <Stack.Screen
          name="LoginScreens"
          component={LoginScreens}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
        />

        <Stack.Screen
          name="HomeSreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Matchingscreen"
          component={MatchingScrren}

        />

        <Stack.Screen
          name="CourseScreen"
          component={CourseScreen}

        />
        <Stack.Screen
          name="DetailCourse"
          component={DetailCourse}

        />
        <Stack.Screen
          name="Testfirebase"
          component={Testfirebase}
          options={{ headerShown: true }}
        />

        <Stack.Screen
          name="CoopScreen"
          component={CoopScreen}
          options={{ headerShown: true }}
        />

        <Stack.Screen
          name="Coperatedetails"
          component={Coperatedetails}
          options={{ headerShown: true }}
        />

        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: true }}
        />

      </Stack.Navigator>
    )
  }

  return (

    <Stack.Navigator>
      <Stack.Screen
        name="HomeSreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Matchingscreen"
        component={MatchingScrren}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name="CourseScreen"
        component={CourseScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="DetailCourse"
        component={DetailCourse}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name="Testfirebase"
        component={Testfirebase}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="CoopScreen"
        component={CoopScreen}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name="Coperatedetails"
        component={Coperatedetails}
        options={{ headerShown: true }}
      />
       <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: true }}
        />


    </Stack.Navigator>


  )
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}
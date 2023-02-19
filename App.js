import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from "react-native";
import supabase from "./supabase.js";
import { Themes } from "./assets/Themes";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import LoginScreen from "./app/screens/LoginScreen.js";
import ProfileScreen from "./app/screens/ProfileScreen.js";
import SignupScreen from "./app/screens/SignupScreen.js";
import HomeScreen from "./app/screens/HomeScreen.js";
import PayScreen from "./app/screens/PayScreen.js";
import AllMessages from "./app/screens/AllMessages.js";
import BuildProfile from "./app/screens/ProfileBuild.js";




const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [authSession, setAuthSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      // get session
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.log("error getting Supabase session");
      } else if (data) {
        setAuthSession(data.session);
      }
    }

    fetchSession();

    // listen to onAuthStateChange and update authSession
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session)
        setAuthSession(session);
    })
  }, []);


  return (
    <NavigationContainer>
      {authSession ?
        <Tab.Navigator>
          <Tab.Screen name="First Plate" component={HomeScreen} />
          <Tab.Screen name="Messages" component={AllMessages} />

          <Tab.Screen name="Pay it Forwards" component={PayScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
        :
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
          <Stack.Screen name="BuildProfile" component={BuildProfile} options={{ headerShown: false }} />

        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: 32,
  },
});
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
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
import Message from "./app/screens/Message.js";
import Match from "./app/screens/MatchScreen.js";


import heart from "./assets/heart.png"
import handmoney from "./assets/hand-money.png"
import lovemessage from "./assets/love-message.png"
import profile from "./assets/profile.jpeg"

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
    <NavigationContainer independent>
      {authSession ?
        <Stack.Navigator initialRouteName="MainTab" screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="MainTab" component={MainTab}/>
          <Stack.Screen name="AllMessages" component={AllMessages} />
          <Stack.Screen name="Message" component={Message}/> 
          <Stack.Screen name="Match" component={Match} />
        </Stack.Navigator>
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

function MainTab() {
  return <Tab.Navigator tabBarOptions={{ showLabel: false }}>
  <Tab.Screen name="First Plate" component={HomeScreen}
    options={{
        tabBarIcon: ({ focused, tintColor }) => {
            return <Image
                source={heart}
                resizeMode='contain'
                style={{
                    width: 25,
                    height: 25
                }}
            />
        }
    }}          
  />
  <Tab.Screen name="Messages" component={AllMessages} 
    options={{
      tabBarIcon: ({ focused, tintColor }) => {
          return <Image
              source={lovemessage}
              resizeMode='contain'
              style={{
                  width: 25,
                  height: 25
              }}
          />
      }
  }}    
  />
  <Tab.Screen name="Pay it Forwards" component={PayScreen} 
    options={{
      tabBarIcon: ({ focused, tintColor }) => {
          return <Image
              source={handmoney}
              resizeMode='contain'
              style={{
                  width: 35,
                  height: 35
              }}
          />
      }
    }}
  />
  <Tab.Screen name="Profile" component={ProfileScreen}
  options={{
    tabBarIcon: ({ focused, tintColor }) => {
        return <Image
            source={profile}
            resizeMode='contain'
            style={{
                width: 25,
                height: 25
            }}
        />
    }
  }}
  />
</Tab.Navigator>
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
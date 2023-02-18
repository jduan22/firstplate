import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import supabase from "./supabase.js";
import { useState, useEffect } from 'react';
//import { NavigationContainer } from '@react-navigation/native';


import LoginScreen from "./app/screens/LoginScreen.js";
import FriendsScreen from "./app/screens/LoginScreen.js";
import ProfileScreen from "./app/screens/LoginScreen.js";
import SignupScreen from "./app/screens/LoginScreen.js";

export default function App() {
  const [session, setSession] = useState(false);

  useEffect(() => {
    const fetchSession = async () => {
      // get session
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.log("error getting Supabase session");
      } else if (data) {
        setSession(data.session);
      }
    }

    fetchSession();

    // listen to onAuthStateChange and update authSession
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      setSession(session);
    })
  }, []);

  return (
    <SafeAreaView>
      <LoginScreen />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  //  alignItems: 'center',
   justifyContent: 'center',
  },
});

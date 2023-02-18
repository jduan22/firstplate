import { useState, useEffect } from 'react';
import { Themes, } from "../../assets/Themes";
import { NavigationContainer } from '@react-navigation/native';
import { View, ScrollView, Text, Pressable, StyleSheet, SafeAreaView, Image, StatusBar } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import supabase from "../../supabase";


export default function ProfileScreen() {
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      // get user
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        setError("Failed to load user data");
        return;
      } else {
        setError(false);
        setUser(user);
      }

      // get user's row from profiles table
      const { data, error } = await supabase
        .from('profiles')
        .select()
        .eq('id', user.id);

      if (error) {
        setError(error.message);
      } else if (data) {
        setError(false);
        setUserProfile(data[0]);
        setLoaded(true);
      }
    }

    fetchUserProfile();
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log("signout error:", error.message);
    }
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
      <View>
        <Image source={{ uri: 'https://president.stanford.edu/wp-content/uploads/sites/3/2020/01/MTL_720px.jpg' }}   
        style={styles.circleImage} />
        <Text style={styles.heading}>MTL</Text>
        <Text style={{fontSize: 32}}>64</Text>
        <Text style={{fontSize: 24}}>Stanford University President</Text>
        <Text style={{fontSize: 24}}>📍 Stanford, CA</Text>
      </View>
      <View style={styles.profile}>
        <Text style={styles.subheading}>Food interests</Text>
        <View style={styles.row}> 
          <Text style={styles.interestTag}>Italian</Text>
          <Text style={styles.interestTag}>American</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.interestTag}>French</Text>
          <Text style={styles.interestTag}>Coffee</Text>
        </View>
        <Text style={styles.subheading}>Other interests</Text>
        <View style={styles.row}>
          <Text style={styles.interestTag}>Golf</Text>
          <Text style={styles.interestTag}>Yoga</Text>
        </View>
        <View style={styles.row}> 
          <Text style={styles.interestTag}>Research</Text>
          <Text style={styles.interestTag}>Tiktok</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
      
      {loaded && <ScrollView contentContainerStyle={styles.screenContainer}>
        <View style={styles.header}>
        <Text style={[styles.screenText, styles.textShadow]}>{userProfile.username}</Text>
        <Pressable onPress={handleSignOut}>
          <Text>Sign out</Text>
        </Pressable>
        </View>
      </ScrollView>}
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    backgroundColor: '#fff',
    alignItems: 'center',
    fontWeight: 'bold',
    alignSelf: 'left',
    fontSize: 41,
    justifyContent: 'center',
  },
  subheading: {
    backgroundColor: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'left',
    alignSelf: 'left',
    marginTop: 20,
  },
  circleImage: {
    width: 200, 
    height: 200, 
    borderRadius: 200/ 2, 
    alignSelf: 'center',
  },
  interestTag: {
    backgroundColor: '#FF9F9F', 
    alignSelf: 'flex-start',
    borderRadius: 20,
    overflow: 'hidden', 
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginRight: 5,
    width: 155,
  },
  curvedTag: {
    borderRadius: 45,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    marginBottom: 5,
  }
});
  
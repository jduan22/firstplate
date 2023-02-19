import React, {Component} from 'react';
import {useRef} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Pressable, Animated } from 'react-native';

export default function MatchScreen({navigation}) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };
  fadeIn();
    
  return (
      <SafeAreaView style={styles.container}>
        <View>
        <Animated.View style={{opacity: fadeAnim}}>
          <Image source={{ uri: 'https://president.stanford.edu/wp-content/uploads/sites/3/2020/01/MTL_720px.jpg' }}   
          style={styles.circleImage} />
          <View style={styles.textContainer}>
            <Text style={styles.heading}>It's a plate!</Text>
            <Text style={styles.subheading}>📍Zareen’s</Text>
            <Pressable onPress={() => {navigation.navigate('Message')}}>
              <Text style={styles.interestTag}>Let's eat</Text>
            </Pressable>
          </View>
          <Image source={{ uri: 'https://www.engineering.com/portals/0/BlogFiles/pdrell_news.jpg' }}   
          style={styles.circleImage} />
        </Animated.View> 
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textContainer: {
      backgroundColor: '#fff',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 20,
      marginBottom: 20,
      justifyContent: 'center',
    },
    heading: {
      backgroundColor: '#fff',
      alignItems: 'center',
      fontWeight: 'bold',
      alignSelf: 'left',
      fontSize: 40,
      justifyContent: 'center',
    },
    subheading: {
      backgroundColor: '#fff',
      fontWeight: 'bold',
      fontSize: 24,
      textAlign: 'center',
      alignSelf: 'center',
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
      alignSelf: 'center',
      borderRadius: 15,
      overflow: 'hidden', 
      color: 'white',
      fontSize: 24,
      textAlign: 'center',
      marginTop: 10,
      width: 150,
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 5,
      marginBottom: 5,
    }
  });
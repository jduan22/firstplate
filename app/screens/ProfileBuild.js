import React, {Component} from 'react';
import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Pressable, Image } from 'react-native';
import DatePicker from 'react-native-datepicker';

export default function App() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState(null);

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Build your profile</Text>
          <Text style={styles.subheading}>What is your date of birth?</Text>
          <DatePicker
            modal
            open={open}
            date={date}
            onDateChange={(date) => {
              setDate(date);
            }}
            onConfirm={(date) => {
              setOpen(false)
              setDate(date)
            }}
            onCancel={() => {
              setOpen(false)
            }}
          />
          <Text style={styles.subheading}>Where are you located?</Text>
          <TextInput style={styles.input}
              onChangeText={setCity}
              value={city}
              placeholder="City, State"
              placeholderTextColor='#FF9F9F'/>
          <Text style={styles.subheading}>Choose your food interests</Text>
          <View style={styles.row}>
            <Text style={styles.interestTag}>Italian</Text>
            <Text style={styles.interestTag}>American</Text>
          </View>
          <Text style={styles.subheading}>Choose your food price range</Text>
          <View style={styles.row}>
            <Text style={styles.interestTag}>$</Text>
            <Text style={styles.interestTag}>$$</Text>
            <Text style={styles.interestTag}>$$$</Text>
            <Text style={styles.interestTag}>$$$$</Text>
          </View>
          <Text style={styles.subheading}>Choose your other interests</Text>
          <View style={styles.row}>
            <Text style={styles.interestTag}>Golf</Text>
            <Text style={styles.interestTag}>Yoga</Text>
            <Text style={styles.interestTag}>Email</Text>
          </View>
        </View>
        <View>
          <Pressable>
            <Text style={styles.button}>Complete profile</Text>
          </Pressable>
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
      alignItems: 'left',
      alignSelf: 'left',
      marginLeft: 30,
      marginRight: 30,
    },
    heading: {
      backgroundColor: '#fff',
      fontWeight: 'bold',
      alignSelf: 'left',
      fontSize: 40,
    },
    subheading: {
      backgroundColor: '#fff',
      fontWeight: 'bold',
      fontSize: 24,
      textAlign: 'center',
      alignSelf: 'left',
      marginTop: 20,
    },
    input: {
      backgroundColor: 'white',
      height: 40,
      padding: 10,
      marginTop: 10,
      marginBottom: 10,
      alignSelf: 'stretch',
      borderRadius: 40,
      borderColor: '#FF9F9F',
      borderWidth: 2
    },
    noteText: {
      backgroundColor: '#fff',
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
    button: {
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
import React, {Component} from 'react';
import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Pressable, Image } from 'react-native';
import DatePicker from 'react-native-datepicker';

export default function ProfileBuild({navigation}) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState(null);

  return (
      <SafeAreaView style={styles.container}>
        <Pressable style={{alignSelf: 'left', paddingLeft: 10}}
          onPress={() => navigation.navigate('Login')}>
          <Image source={{ uri: 'https://cdn3.iconfinder.com/data/icons/mini-icon-set-web-design-device/91/Web_-_Design_-_Device_97-512.png' }}   
          style={{width: 40, height: 40}}/>
        </Pressable>
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
            <Text style={styles.button}>Italian</Text>
            <Text style={styles.button}>French</Text>
            <Text style={styles.button}>Chinese</Text>
            <Text style={styles.button}>American</Text>
            <Text style={styles.button}>Korean</Text>
            <Text style={styles.button}>Coffee</Text>
            <Text style={styles.button}>Japanese</Text>
            <Text style={styles.button}>Indian</Text>
            <Text style={styles.button}>Dessert</Text>
          </View>
          <Text style={styles.subheading}>Choose your food price range</Text>
          <View style={styles.row}>
            <Text style={styles.button}>$</Text>
            <Text style={styles.button}>$$</Text>
            <Text style={styles.button}>$$$</Text>
            <Text style={styles.button}>$$$$</Text>
          </View>
          <Text style={styles.subheading}>Choose your other interests</Text>
          <View style={styles.row}>
            <Text style={styles.button}>Sports</Text>
            <Text style={styles.button}>Art</Text>
            <Text style={styles.button}>Music</Text>
            <Text style={styles.button}>Travel</Text>
            <Text style={styles.button}>Cooking</Text>
            <Text style={styles.button}>Exercise</Text>
          </View>
        </View>
        <View>
          <Pressable onPress={() => {navigation.navigate('Signup')}}>
            <Text style={styles.submitButton}>Complete profile</Text>
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
      alignSelf: 'flex-stretch',
      borderRadius: 10,
      overflow: 'hidden', 
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
      marginTop: 10,
      marginRight: 10,
      paddingLeft: 15,
      paddingRight: 15
    },
    submitButton: {
      backgroundColor: '#FF9F9F', 
      fontWeight: 'bold',
      alignSelf: 'flex-stretch',
      borderRadius: 15,
      overflow: 'hidden', 
      color: 'white',
      fontSize: 24,
      textAlign: 'center',
      height: 35,
      marginTop: 30,
      paddingLeft: 15,
      paddingRight: 15
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 5,
      marginBottom: 5,
    }
  });
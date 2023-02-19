import React, {Component} from 'react';
import {useState} from 'react';
import {pressed} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Pressable, Image, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';

export default function ProfileBuild({navigation}) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState(null);
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [selected4, setSelected4] = useState(false);
  const [selected5, setSelected5] = useState(false);
  const [selected6, setSelected6] = useState(false);
  const [selected7, setSelected7] = useState(false);
  const [selected8, setSelected8] = useState(false);
  const [selected9, setSelected9] = useState(false);
  const [selected10, setSelected10] = useState(false);
  const [selected11, setSelected11] = useState(false);
  const [selected12, setSelected12] = useState(false);
  const [selected13, setSelected13] = useState(false);
  const [selected14, setSelected14] = useState(false);
  const [selected15, setSelected15] = useState(false);
  const [selected16, setSelected16] = useState(false);
  const [selected17, setSelected17] = useState(false);
  const [selected18, setSelected18] = useState(false);
  const [selected19, setSelected19] = useState(false);

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
          <TouchableOpacity
            onPress={() => setSelected1(!selected1)}
            style={[{ backgroundColor: selected1 ? '#FF9F9F' : '#FFCDD2' }, styles.buttonText]}>
            <Text style={styles.buttonText}>Italian</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected2(!selected2)}
            style={[{ backgroundColor: selected2 ? '#FF9F9F' : '#FFCDD2' }, styles.buttonText]}>
            <Text style={styles.buttonText}>French</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected3(!selected3)}
            style={[{ backgroundColor: selected3 ? '#FF9F9F' : '#FFCDD2' }, styles.buttonText]}>
            <Text style={styles.buttonText}>Chinese</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected4(!selected4)}
            style={[{ backgroundColor: selected4 ? '#FF9F9F' : '#FFCDD2' }, styles.buttonText]}>
            <Text style={styles.buttonText}>American</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected5(!selected5)}
            style={[{ backgroundColor: selected5 ? '#FF9F9F' : '#FFCDD2' }, styles.buttonText]}>
            <Text style={styles.buttonText}>Korean</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected6(!selected6)}
            style={[{ backgroundColor: selected6 ? '#FF9F9F' : '#FFCDD2' }, styles.buttonText]}>
            <Text style={styles.buttonText}>Coffee</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected7(!selected7)}
            style={[{ backgroundColor: selected7 ? '#FF9F9F' : '#FFCDD2' }, styles.buttonText]}>
            <Text style={styles.buttonText}>Japanese</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected8(!selected8)}
            style={[{ backgroundColor: selected8 ? '#FF9F9F' : '#FFCDD2' }, styles.buttonText]}>
            <Text style={styles.buttonText}>Indian</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected9(!selected9)}
            style={[{ backgroundColor: selected9 ? '#FF9F9F' : '#FFCDD2' }, styles.buttonText]}>
            <Text style={styles.buttonText}>Dessert</Text>
          </TouchableOpacity>
          </View>
          <Text style={styles.subheading}>Choose your food price range</Text>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => setSelected10(!selected10)}
              style={[{ backgroundColor: selected10 ? '#FF9F9F' : '#FFCDD2' }, styles.buttonText]}>
              <Text style={styles.buttonText}>$</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelected11(!selected11)}
              style={[{ backgroundColor: selected11 ? '#FF9F9F' : '#FFCDD2' }, styles.buttonText]}>
              <Text style={styles.buttonText}>$$</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelected12(!selected12)}
              style={[{ backgroundColor: selected12 ? '#FF9F9F' : '#FFCDD2' }, styles.buttonText]}>
              <Text style={styles.buttonText}>$$$</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelected13(!selected13)}
              style={[{ backgroundColor: selected13 ? '#FF9F9F' : '#FFCDD2' }, styles.buttonText]}>
              <Text style={styles.buttonText}>$$$$</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.subheading}>Choose your other interests</Text>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => setSelected14(!selected14)}
              style={[{ backgroundColor: selected14 ? '#FF9F9F' : '#FFCDD2' }, styles.buttonText]}>
              <Text style={styles.buttonText}>Sports</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelected15(!selected15)}
              style={[{ backgroundColor: selected15 ? '#FF9F9F' : '#FFCDD2' }, styles.buttonText]}>
              <Text style={styles.buttonText}>Art</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelected16(!selected16)}
              style={[{ backgroundColor: selected16 ? '#FF9F9F' : '#FFCDD2' }, styles.buttonText]}>
              <Text style={styles.buttonText}>Music</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelected17(!selected17)}
              style={[{ backgroundColor: selected17 ? '#FF9F9F' : '#FFCDD2' }, styles.buttonText]}>
              <Text style={styles.buttonText}>Travel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelected18(!selected18)}
              style={[{ backgroundColor: selected18 ? '#FF9F9F' : '#FFCDD2' }, styles.buttonText]}>
              <Text style={styles.buttonText}>Cooking</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelected19(!selected19)}
              style={[{ backgroundColor: selected19 ? '#FF9F9F' : '#FFCDD2' }, styles.buttonText]}>
              <Text style={styles.buttonText}>Exercise</Text>
            </TouchableOpacity>
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
      alignSelf: 'center',
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
    buttonText: {
      borderRadius: 10,
      overflow: 'hidden', 
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
      marginRight: 10,
      marginBottom: 10,
      paddingLeft: 5,
      paddingRight: 5,
      paddingBottom: 10,
      height: 25
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
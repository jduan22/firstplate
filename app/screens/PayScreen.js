import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView, Image } from "react-native";

let name = "Kayla";
let email = "keysofparadise1@gmail.com";
let description = "Someone paid for your plate!";

export default function PayScreen() {
  const [amount, setAmount] = useState(0);
    return (
      <>
        <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.heading}>pay it forward</Text>
          <View style={styles.text}>
          <Text>Enjoyed your plate? Pay it forward by funding another person's plate!</Text>
          </View>
          <Image source={{ uri: 'https://womans-worth.com/wp-content/uploads/smiling-woman.jpg' }}   
        style={styles.circleImage} />
        <View style={styles.formContainer}>
          <View style={styles.input}>
          <Text>{name}</Text>
          </View>
          <View style={styles.input}>
          <Text>{email}</Text>
          </View>
          <TextInput placeholder="$"
          keyboardType = 'numeric' 
          style={styles.input}
          onChangeText={(amount) => setAmount(parseFloat(amount))}
          value = {amount} />
        </View>
        <Pressable onPress={() => submitPayment(amount)}>
          <Text style={styles.button}>Pay it forward</Text>
        </Pressable>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
      </>
    );
  }

  function submitPayment(amount) {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: '0056ec84f05647728cf5f8ca7750b3ff:6XRkFQVC8XYGJcvFRHDIPHocq6lVu6'
      },
      body: JSON.stringify({
        recipient: email,
        name: name,
        amount: amount,
        description: description
      })
    };
  
    fetch('https://sandbox.checkbook.io/v3/check/digital', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  }
  
  
  const styles = StyleSheet.create({
    text: {
      width: '90%',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    formContainer: {
      backgroundColor: '#FF9F9F',
      paddingTop: 10,
      marginTop: 20,
      marginBottom: 20,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'stretch',
      borderRadius: 20,
    },
    heading: {
      alignItems: 'center',
      fontWeight: 'bold',
      alignSelf: 'center',
      fontSize: 41,
      justifyContent: 'center',
      marginBottom: 10, 
    },
    circleImage: {
      width: 200, 
      height: 200, 
      borderRadius: 200/ 2, 
      marginTop: 20,
      marginBottom: 20,
      alignSelf: 'center',
    },
    button: {
      backgroundColor: '#FF9F9F', 
      alignSelf: 'center',
      borderRadius: 20,
      overflow: 'hidden', 
      color: 'white',
      fontSize: 24,
      textAlign: 'center',
      paddingHorizontal: 8,
      paddingVertical: 6,
      marginRight: 5,
      width: 170,
    },
    input: {
      backgroundColor: 'white',
      height: 40,
      padding: 10,
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
      alignSelf: 'stretch',
      borderRadius: 10,

    },
    curvedTag: {
      borderRadius: 45,
    }
  });
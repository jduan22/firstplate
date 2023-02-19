import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Pressable, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Message({navigation}) {
  const messagesStack = createNativeStackNavigator()
  return (
    <SafeAreaView style={styles.container}>
      
      <SafeAreaView class = "navigation" style={styles.navBar}>
        {/* <NavigationContainer independent> */}
          <Pressable onPress={() => navigation.goBack()}>
            <Image source={{ uri: 'https://cdn3.iconfinder.com/data/icons/mini-icon-set-web-design-device/91/Web_-_Design_-_Device_97-512.png' }}   
            style={{width: 40, height: 40}}/>
          </Pressable>
        {/* </NavigationContainer> */}
        
      </SafeAreaView>
      

      <SafeAreaView class = "profile">
          <Image source={{ uri: 'https://news.stanford.edu/wp-content/uploads/2017/02/drell_feach.jpg' }}   
          style={styles.circleImage} />
          <Text style={styles.heading}>Persis Drell</Text>
          <Text style={styles.profileBox}>View Profile</Text>
      </SafeAreaView>

      <SafeAreaView class = "timestamp">
        <Text style= {styles.timeStamp}>Today, 9:20 PM</Text>
      </SafeAreaView>

      <SafeAreaView class = "messages" style={styles.messageContainer}>
        <Text style={styles.messageBubbleUser}>Hi, so excited to meet at Zareen’s on Thursday 6-8PM!</Text>
      </SafeAreaView>

      <SafeAreaView class = "otherMessage" style={styles.otherMessageContainer}>
        <Image source={{ uri: 'https://news.stanford.edu/wp-content/uploads/2016/10/mtl_portraitnews.jpg' }}   
          style={styles.messageImage} />
        <Text style={styles.messageBubbleOther}>Looking forward to it!</Text>
      </SafeAreaView>

      <SafeAreaView class = "textingArea" style={styles.row}>
        <Text style={styles.messageBox}>Send your message...</Text>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1160/1160358.png' }}   
        style={{width: 30, height: 30, alignSelf: 'center', marginLeft: 10, marginRight:10}} />
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/60/60525.png' }}   
        style={{width: 30, height: 30, alignSelf: 'center', marginLeft: 10, marginRight:10}} />
      </SafeAreaView>

      <StatusBar style="auto" />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },

  navBar: {
    flex: 0.2,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: 10,
  },

  messageContainer: {
    flex: 0.5,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    alignSelf: 'flex-end',
    marginRight: 10,
    flexDirection: 'column',
  },

  otherMessageContainer: {
    flex: 0.8,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    alignSelf: 'start',
    marginLeft: 10,
    flexDirection: 'column',
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
    alignSelf: 'center',
    fontSize: 20,
    margin: 10,
    justifyContent: 'top',
  },
  
  circleImage: {
    width: 100, 
    height: 100, 
    borderRadius: 200/ 2, 
    alignSelf: 'center',
  },

  messageImage: {
    width: 230, 
    height: 250,  
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 30,
  },

  messageBox: {
    backgroundColor: '#DADADA', 
    borderRadius: 20,
    overflow: 'hidden', 
    color: 'black',
    fontSize: 20,
    textAlign: 'left',
    paddingHorizontal: 25,
    paddingVertical: 6,
    marginRight: 5,
    width: 270,
  },

  messageBubbleUser: {
    backgroundColor: '#DADADA', 
    borderRadius: 20,
    overflow: 'hidden', 
    color: 'black',
    fontSize: 20,
    textAlign: 'left',
    paddingHorizontal: 25,
    paddingVertical: 6,
    marginRight: 5,
    width: 270,

  },

  messageBubbleOther: {
    backgroundColor: '#FF9F9F', 
    borderRadius: 20,
    overflow: 'hidden', 
    color: 'white',
    fontSize: 20,
    textAlign: 'left',
    paddingHorizontal: 25,
    paddingVertical: 6,
    marginRight: 5,
  },

  profileBox: {
    backgroundColor: '#FF9F9F', 
    borderRadius: 20,
    overflow: 'hidden', 
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 25,
    paddingVertical: 6,
    marginRight: 5,
    marginBottom: 30,
  },

  timeStamp: { 
    color: 'gray',
    fontSize: 16,
    textAlign: 'center',
    // paddingTop: 30,
    // paddingBottom: 1,
    marginTop: 1,

  },

  curvedTag: {
    borderRadius: 45,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    marginTop: 100,
    marginBottom: 10,
  },

  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
});
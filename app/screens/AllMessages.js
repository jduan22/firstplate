import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Pressable, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function AllMessages() {
  return (
    <SafeAreaView style={styles.container}>
      
      <SafeAreaView class = "navigation" style={styles.navBar}>
        <Pressable onPress={() => navigation.navigate('App')}>
          <Image source={{ uri: 'https://cdn3.iconfinder.com/data/icons/mini-icon-set-web-design-device/91/Web_-_Design_-_Device_97-512.png' }}   
          style={{width: 40, height: 40}}/>
        </Pressable>

        <Text style={styles.heading}>messages</Text>
      </SafeAreaView>
      

      <SafeAreaView class = "listOfMessages">

        <SafeAreaView class = "singularMessages" style={styles.messageContainer}>

          <SafeAreaView style={styles.profilepic}>
            <Image source={{ uri: 'https://news.stanford.edu/wp-content/uploads/2017/02/drell_feach.jpg' }}   
          style={styles.circleImage} />
          </SafeAreaView>
          <SafeAreaView style={styles.name}>
            <Text style={styles.realName}>Persis Drell</Text>
            <Text>Typing...</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.time}>
            <Text>9:25 PM</Text>
          </SafeAreaView>

        </SafeAreaView>

        {/* <hr /> */}

        <SafeAreaView class = "singularMessages" style={styles.messageContainer}>

          <SafeAreaView style={styles.profilepic}>
            <Image source={{ uri: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg?resize=1200:*' }}   
          style={styles.circleImage} />
          </SafeAreaView>
          <SafeAreaView style={styles.name}>
            <Text style={styles.realName}>Elon Musk</Text>
            <Text>Egg-cellent Choice! 🍳</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.time}>
            <Text>9:00 PM</Text>
          </SafeAreaView>

        </SafeAreaView>

        <SafeAreaView class = "singularMessages" style={styles.messageContainer}>

          <SafeAreaView style={styles.profilepic}>
            <Image source={{ uri: 'https://yt3.googleusercontent.com/bFpwiiOB_NLCVsIcVQ9UcwBjb1RzipnMmtNfLSWpeIaHboyGkBCq4KBitmovRbStk9WvIWIZOyo=s900-c-k-c0x00ffffff-no-rj' }}   
          style={styles.circleImage} />
          </SafeAreaView>
          <SafeAreaView style={styles.name}>
            <Text style={styles.realName}>Gordon Ramsay</Text>
            <Text>You’re burrito-ful. 🌯</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.time}>
            <Text>9:25 PM</Text>
          </SafeAreaView>

        </SafeAreaView>

        <SafeAreaView class = "singularMessages" style={styles.messageContainer}>

          <SafeAreaView style={styles.profilepic}>
            <Image source={{ uri: 'data:image/jpeg;base64,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' }}   
          style={styles.circleImage} />
          </SafeAreaView>
          <SafeAreaView style={styles.name}>
            <Text style={styles.realName}>Jeff Bezos</Text>
            <Text>I’m your biggest flan! 🍮</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.time}>
            <Text>Yesterday</Text>
          </SafeAreaView>

        </SafeAreaView>

        <SafeAreaView class = "singularMessages" style={styles.messageContainer}>

          <SafeAreaView style={styles.profilepic}>
            <Image source={{ uri: 'data:image/jpeg;base64,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' }}   
          style={styles.circleImage} />
          </SafeAreaView>
          <SafeAreaView style={styles.name}>
            <Text style={styles.realName}>James Charles</Text>
            <Text>You have a pizza my heart! 🍕</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.time}>
            <Text>Sunday</Text>
          </SafeAreaView>

        </SafeAreaView>

        <SafeAreaView class = "singularMessages" style={styles.messageContainer}>

          <SafeAreaView style={styles.profilepic}>
            <Image source={{ uri: 'https://m.media-amazon.com/images/M/MV5BMjIwNDE2ODI5OF5BMl5BanBnXkFtZTcwMDkzMjU3NQ@@._V1_FMjpg_UX1000_.jpg' }}   
          style={styles.circleImage} />
          </SafeAreaView>
          <SafeAreaView style={styles.name}>
            <Text style={styles.realName}>Drake</Text>
            <Text>We are mint to be. 🌿</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.time}>
            <Text>2/13/23</Text>
          </SafeAreaView>

        </SafeAreaView>

        <SafeAreaView class = "singularMessages" style={styles.messageContainer}>

          <SafeAreaView style={styles.profilepic}>
            <Image source={{ uri: 'https://www.drphil.com/sites/default/files/styles/1100x620/public/images/2019-05/askdrp.jpg?h=ae0a076d&itok=Z39-oGSh' }}   
          style={styles.circleImage} />
          </SafeAreaView>
          <SafeAreaView style={styles.name}>
            <Text style={styles.realName}>Dr. Phil</Text>
            <Text>I donut want anything serious. 🍩</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.time}>
            <Text>2/1/23</Text>
          </SafeAreaView>

        </SafeAreaView>

        

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
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: 10,
  },

  messageContainer: {
    flex: 2,
    width: "85%",
    height: "10%",
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 60,
    marginTop: 60,
    borderWidth: 0.5,
    borderColor: 'light grey',
  },
  
  profilepic: {
    flex: 1,
  },
  name: {
    flex: 2,
  },

  realName:{
    fontWeight: 'bold',
    fontSize: 20,
  },

  time: {
    flex: 1,
    textAlign: 'right',
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
    width: 70, 
    height: 70, 
    borderRadius: 200/ 2, 
  },
});
import React, {Component} from 'react';
import { useState, useEffect } from 'react';
import { Themes, } from "../../assets/Themes";
import { NavigationContainer } from '@react-navigation/native';
import { View, ScrollView, Text, Pressable, StyleSheet, SafeAreaView, Image, StatusBar } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import supabase from "../../supabase";
import DatePicker from 'react-native-datepicker';

export default function HomeScreen({navigation}) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.row}>
          <DatePicker mode="datetime"
          open={open}
          date={date}
          style={{width: 200}}
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
        </View>
        <Image
          style={styles.imageOne}
          source={{
            uri: 'https://images.squarespace-cdn.com/content/v1/627920d33ad21c07ac453be9/db1ce836-9c9d-424f-8413-b76fb7366c5c/zareens-redwood-city.png',
          }}
        />
                <View style={styles.restaurantOne}>
          <View style={styles.zareensTitle}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>Zareen's</Text>
            <Text>3 miles away</Text>
          </View>
          <View>
            <Text> 📍 palo alto </Text>
            <Text> 🍛 pakistani food </Text>
            <Text> 💲 20-30 per person </Text>
            <Text> www.zareensrestaurant.com </Text>
          </View>
        </View>
        <View style={styles.pink}>
          <View style={styles.vertical}>
            <Text style={styles.bold}>address</Text>
            <Image style={styles.image} source={{ uri: 'https://10619-2.s.cdn12.com/maps/zareens-palo-alto-map.jpg' }} />
            <Text style={styles.bold}>zareen's info</Text>
            <View>
              <View style={styles.infoRow}>
                  <Text style={styles.tag}>💵 $20-30</Text>
                  <Text style={styles.tag}>🍛 pakistani/indian</Text>
                  <Text style={styles.tag}>🕯️ intimate vibe</Text>
                  <Text style={styles.tag}>🌱 vegan-friendly</Text>
                  <Text style={styles.tag}>🌾 gluten-free</Text>
                  <Text style={styles.tag}>🏳️‍🌈 lgbtq+ friendly</Text>
                  <Text style={styles.tag}>♀️ woman owned</Text>
              </View>
            </View>
            <Image style={styles.image} source={{ uri: 'https://s3-media0.fl.yelpcdn.com/bphoto/XQPnnBaO6mbHrxrzX1gVUw/348s.jpg' }}/>
            <Image style={styles.image} source={{ uri: 'https://fastly.4sqi.net/img/general/600x600/501186204_GgUF9rufB2TMU7EHDXe4N8Ba13nozn-0V-g082vws1M.jpg' }}/>
            <Image style={styles.image} source={{ uri: 'https://s3-media0.fl.yelpcdn.com/bphoto/aB_GLw02ylwc-Mz2ByAeew/348s.jpg' }}/>
              <Pressable style={{alignSelf: 'center'}} onPress={() => {navigation.push('Match')}}>
                <Text style={styles.submitButton}>🍽️</Text>
              </Pressable>
              <Pressable style={{alignSelf: 'center', marginTop: 20}} >
                <Text style={{fontSize: 18, fontStyle: 'italic'}}>
                  Not your cup of tea? See your next match
                </Text>
              </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    marginLeft: 15,
    marginBottom: 5
  },
  infoRow: {
    alignContent: 'left',
    alignItems: 'left',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    marginLeft: 15,
    marginBottom: 5
  },
  imageOne: {
    width: '93%',
    height: 500,
    borderRadius: 20,
    alignSelf: 'center',
  },
  restaurantOne: {
    
    backgroundColor: 'white',
    padding: 8,
    paddingLeft: 10,
    marginLeft: '5.8%',
    position: 'absolute',
    marginTop: '98%',
    height: '5%',
    borderRadius: 20,
    width: '88%',

  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  zareensTitle: {
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 42,
    fontColor: 'white'
  },
  bold: {
    paddingBottom: '2%',
    marginTop: 20,
    marginLeft: 10,
    fontSize: '25',
    fontWeight: 'bold',
    paddingLeft: '2%',
  },
  pink: {
    marginTop: 5,
    backgroundColor: '#FF9F9F',
    width: '93%',
    alignSelf: 'center',
    borderRadius: 20,
    height: '200%',
  },
  image: {
    width: '93%',
    height: 200,
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 10,
  },
  tag: {
    backgroundColor: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    borderRadius: 15,
    overflow: 'hidden',
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10
  },
  submitButton: {
    backgroundColor: 'white', 
    fontWeight: 'bold',
    alignSelf: 'flex-stretch',
    borderRadius: 30,
    overflow: 'hidden', 
    color: '#FF9F9F',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10
  }
});

// export default App;

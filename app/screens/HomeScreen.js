import { useState, useEffect } from 'react';
import { Themes, } from "../../assets/Themes";
import { NavigationContainer } from '@react-navigation/native';
import { View, ScrollView, Text, Pressable, StyleSheet, SafeAreaView, Image, StatusBar } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import supabase from "../../supabase";

const App = () => {
  return (
    // <SafeAreaView style={styles.scroll}>
    <>
      <ScrollView>
        <View style={styles.row}>
          <View style={styles.dateTag}><Text>Tuesday, February 14th</Text></View>
          <View style={styles.dateTag}><Text>6:30pm</Text></View>
        </View>
        <Image
          style={styles.imageOne}
          source={{
            uri: 'https://images.squarespace-cdn.com/content/v1/627920d33ad21c07ac453be9/db1ce836-9c9d-424f-8413-b76fb7366c5c/zareens-redwood-city.png',
          }}
        />

        <View style={styles.restaurantOne}>
          <View style={styles.zareensTitle}>
            <Text>Zareen's</Text>
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
            <Image style={styles.imageTwo} source={{ uri: 'https://10619-2.s.cdn12.com/maps/zareens-palo-alto-map.jpg' }} />
            <Text style={styles.bold}>zareen's info</Text>
            <View>
              <View style={styles.row}>
                <View style={styles.interestTag}>
                  <Text> $20-30</Text>
                </View>
                <View>
                  <Text>pakistani/indian</Text>
                </View>
              </View>
              <View>
                <View>
                  <Text>intimate vibe</Text>
                </View>
                <View>
                  <Text>vegan-friendly</Text>
                </View>
              </View>
              <View>
                <View>
                  <Text>gluten-free</Text>
                </View>
                <View>
                  <Text>lgbtq+ friendly</Text>
                </View>
              </View>
              <View>
                <View>
                  <Text>woman owned</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    {/* // </SafeAreaView> */}
    </>
  );
};

export default App;

// export default function HomeScreen({ navigation }) {
//   return (
//     <SafeAreaView style={styles.scroll}>
//     <ScrollView>

//   <View style={styles.restaurantOne}>
//     <View style={styles.zareensTitle}>
//       <Text>Zareen's</Text>
//       <Text>3 miles away</Text>
//     </View>
//     <View>
//       <Text> 📍 palo alto </Text>
//       <Text> 🍛 pakistani food </Text>
//       <Text> 💲 20-30 per person </Text>
//       <Text> www.zareensrestaurant.com </Text>
//     </View>
//   </View>
//   <View style={styles.pink}>
//     <View style={styles.vertical}>
//       <Text style={styles.bold}>address</Text>
//       <Image style={styles.imageTwo} source={{uri: 'https://10619-2.s.cdn12.com/maps/zareens-palo-alto-map.jpg'}}/>
//       <Text>zareen's info</Text>
//       <View>
//         <View>
//           <View>
//             <Text> $20-30</Text>
//           </View>
//           <View>
//             <Text>pakistani/indian</Text>
//           </View>
//         </View>
//         <View>
//           <View>
//             <Text>intimate vibe</Text>
//           </View>
//           <View>
//             <Text>vegan-friendly</Text>
//           </View>
//         </View>
//         <View>
//           <View>
//             <Text>gluten-free</Text>
//           </View>
//           <View>
//             <Text>lgbtq+ friendly</Text>
//           </View>
//         </View>
//         <View>
//           <View>
//             <Text>woman owned</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   </View>
// </ScrollView>
// </SafeAreaView>
//   );
// }

const styles = StyleSheet.create({
  interestTag: {

  },
  scroll: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    height: '500%',
  },
  vertical: {
    paddingTop: '2%',
  },
  bold: {
    paddingBottom: '2%',
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
  restaurantOne: {
    
    backgroundColor: 'white',
    padding: 8,
    paddingLeft: 10,
    marginLeft: '5.8%',
    position: 'absolute',
    marginTop: '93%',
    height: '40%',
    borderRadius: 20,
    width: '88%',

  },
  imageOne: {
    width: '93%',
    height: '200%',
    borderRadius: 20,
    alignSelf: 'center',
  },
  imageTwo: {
    width: '93%',
    height: '50%',
    alignSelf: 'center',
    borderRadius: 20,
  },
  dateTag: {
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
  row: {
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    marginBottom: 5,
    
  },
  zareensTitle: {
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

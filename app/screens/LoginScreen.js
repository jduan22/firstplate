import { useState } from 'react';
import supabase from "../../supabase";
import { Themes } from "../../assets/Themes";
import { View, Text, TextInput, Pressable, StyleSheet, Image } from "react-native";

export default function LoginScreen({ navigation}) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);

  const handleSignIn = async () => {
    // sign in with Supabase auth
    const { user, session, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
  
    if (error) {
      setError(error.message);
    };
  }
  
  return (
    <View style={styles.container}>
      <Image source={require('./firstplateicon.png')} 
      style={{width:200, height:200}}/>
      <Text style={styles.heading}>first plates</Text>
      <Text style={styles.subheading}>Choose a plate.</Text>
      <Text style={styles.subheading}>Go on a date.</Text>

        <View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder="email"
              placeholderTextColor='#FF9F9F'
            />
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="password"
              placeholderTextColor='#FF9F9F'
            />
          </View>
        </View>

        <Pressable
          style={styles.button}
          onPress={handleSignIn}
        >
          <Text style={styles.button}>Let's eat</Text>
        </Pressable >

        <Text style={{marginTop: 20}}>
          Don't have an account? <Pressable onPress={() => {navigation.navigate('Signup')}}><Text>Sign up</Text></Pressable>
        </Text>

        {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  inputContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    width: 300
  },
  heading: {
    alignItems: 'center',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 41,
    justifyContent: 'center',
    marginBottom: 10, 
  },
  subheading: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    alignSelf: 'center'
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
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'stretch',
    borderRadius: 20,
    borderColor: '#FF9F9F',
    borderWidth: 2
  },
  curvedTag: {
    borderRadius: 45,
  },
  errorText: {
    color: Themes.colors.white,
    fontSize: 15,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: Themes.colors.red,
    borderRadius: 100,
    marginTop: 20,
  }
});
  
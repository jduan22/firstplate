import { useState } from 'react';
import supabase from "../../supabase";
import { Themes } from "../../assets/Themes";
import { View, ScrollView, Text, TextInput, Pressable, StyleSheet } from "react-native";

export default function SignupScreen({ navigation}) {
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);

  const handleSignUp = async () => {
    // check all fields have been filled out
    if (!email || !username || !fullName || !password) {
      setError("Please fill in all fields");
      return;
    }

    // sign up with Supabase auth
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password
    });
  
    if (error) {
      setError(error.message);
      return;
    } else if (data) {
      setError(false);
      upsertUserProfile(data.user);
    }
  }

  const upsertUserProfile = async (user) => {
    if (!user) {
      setError("Unable to get user");
      return;
    };

    // create updates object
    const updates = {
      id: user.id,
      username: username,
      full_name: fullName,
      updated_at: new Date(),
      year_joined: new Date().getFullYear(),
    };

    // upsert updates to profiles table
    const { error } = await supabase
      .from('profiles')
      .upsert(updates);

    if (error) {
      setError(error.message);
    };
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>first plates</Text>
        <Text style={styles.subheading}>join us!</Text>

        <View style={styles.loginForm}>
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
              onChangeText={setUsername}
              value={username}
              placeholder="username"
              placeholderTextColor='#FF9F9F'
            />
            <TextInput
              style={styles.input}
              onChangeText={setFullName}
              value={fullName}
              placeholder="full name"
              placeholderTextColor='#FF9F9F'
            />
            <TextInput
              secureTextEntry = {true}
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="password"
              placeholderTextColor='#FF9F9F'
            />
          </View>
        </View>

        <Pressable onPress={handleSignUp}>
          <Text style={styles.button}>let's eat</Text>
        </Pressable >

        <Text style={{marginTop: 20}}>
          Already have an account? <Pressable onPress={() => {navigation.navigate('Login')}}><Text>Log in</Text></Pressable>
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
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'stretch',
    borderRadius: 40,
    borderColor: '#FF9F9F',
    borderWidth: 2
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
  
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Validation Error', 'Please fill in all fields.');
    } else {
      navigation.replace('Home'); // Replace with your main screen route
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lets Get Started!</Text>
      <Text style={styles.subtext}>
        Sign in to your account to get access to {'\n'} various features
      </Text>

      {/* Email Field */}
      <Text style={styles.label}>Enter Your Email</Text>
      <View style={styles.inputContainer}>
         <Image
          source={require('../../assets/mail.png')}
          style={styles.icon}
        />
        <TextInput
          placeholder="Enter your email"
          placeholderTextColor="#999"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

     <Text style={styles.label}>Enter Your Password</Text>
      <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/lock.png')}
          style={styles.icon}
        />
         <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry={!showPassword}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
         <Image
            source={
              showPassword
                ? require('../../assets/show.png')
                : require('../../assets/eye-off.png')
            }
            style={styles.toggleIcon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={{ alignSelf: 'flex-end', marginBottom: 20 }}>
        <Text style={{ color: '#1D96EE' }}></Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInBtn} onPress={handleLogin}>
        <Text style={styles.signInText}>Log  In</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontWeight: '500'}}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{ color: '#1D96EE', fontWeight: '500' }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 40,
    // justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 6,
  },
  subtext: {
    color: '#888',
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 15,
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1EDFD',
    borderRadius: 30,
    paddingHorizontal: 14,
    marginBottom: 16,
    height: 50,
  },
  icon: {
    marginRight: 8,
    width: 20, height: 20,
  },
   toggleIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  input: {
    flex: 1,
    color: '#000',
  },
   label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10,
    color: '#828282',
  },
  signInBtn: {
    backgroundColor: '#1D96EE',
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
  },
  signInText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

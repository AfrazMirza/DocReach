import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Text style={styles.appName}>
        <Text style={styles.primary}>Doc</Text>
        <Text style={styles.secondary}> Reach</Text>
      </Text>

      <Image
        source={require('../../assets/logo2.png')} 
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.heading}>Let’s Get Started</Text>
      <Text style={styles.subtext}>Login to find your doctor and {"\n"}connect with them</Text>

      <TouchableOpacity style={styles.signInBtn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signInText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpBtn} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#fff',
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },
  appName: {
    fontSize: 32,
    fontWeight: '600',
    // marginBottom: 60,
  },
//   primary: {
//     color: '#000',
//   },
//   secondary: {
//     color: '#6c3efc',
//   },
  heading: {
    fontSize: 24,
    fontWeight: '500',
    color: '#111',
  },
  subtext: {
    fontSize: 18,
    color: '#888',
    marginTop: 6,
    marginBottom: 30,
    textAlign: 'center',
  },
  signInBtn: {
    width: '100%',
    backgroundColor: '#1D96EE',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 15,
  },
  signInText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signUpBtn: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#1D96EE',
    alignItems: 'center',
  },
  signUpText: {
    color: '#1D96EE',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

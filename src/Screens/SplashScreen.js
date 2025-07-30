import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo2.png')} style={styles.logo} />
      <Text style={styles.title}>Doc Reach</Text>
      <Text style={styles.subtitle}>Connecting you to care, instantly.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'
  },
  logo: {
    width: 250, height: 250, marginBottom: 20,
  },
  title: {
    fontSize: 30, color: '#333', fontWeight: 'bold', letterSpacing: 1,
  },
  subtitle: {
    fontSize: 18, color: '#888', fontWeight: '500', marginTop: 10, fontStyle: 'italic',
  },
});

export default SplashScreen;

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleSignUp = () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      Alert.alert('Validation Error', 'Please fill in all the fields.');
    } else if (!agree) {
      Alert.alert(
        'Agreement Required',
        'Please agree to the terms and privacy policy.'
      );
    } else {
      navigation.replace('Home'); // Replace with your actual main screen
    }
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Create An Account!</Text>
        <Text style={styles.subtext}>
                Your journey starts here. Create your account today
              </Text>
        
        <Text style={styles.label}>Enter Your Name</Text>
      <View style={styles.inputContainer}>
        <Image source={require('../../assets/user.png')} style={styles.icon} />
        <TextInput
          placeholder="Enter your name"
          placeholderTextColor="#999"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Email Input */}
      <Text style={styles.label}>Enter Your Email</Text>
      <View style={styles.inputContainer}>
        <Image source={require('../../assets/mail.png')} style={styles.icon} />
        <TextInput
          placeholder="Enter your email"
          placeholderTextColor="#999"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password Input */}
      <Text style={styles.label}>Enter Your Password</Text>
      <View style={styles.inputContainer}>
        <Image source={require('../../assets/lock.png')} style={styles.icon} />
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
                ? require('../../assets/eye-off.png')
                : require('../../assets/show.png')
            }
            style={styles.toggleIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Terms Agreement */}
      <TouchableOpacity
        onPress={() => setAgree(!agree)}
        style={styles.agreementContainer}
      >
        <View
          style={[
            styles.checkbox,
            { backgroundColor: agree ? '#1D96EE' : '#fff' },
          ]}
        />
        <Text style={styles.agreementText}>
          I agree with{' '}
          <Text style={styles.linkText}>terms and conditions</Text> and{' '}
          <Text style={styles.linkText}>privacy policy</Text>
        </Text>
      </TouchableOpacity>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpBtn} onPress={handleSignUp}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Already Have Account */}
      <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center' }}>
        <Text style={{fontWeight: '500'}}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: '#1D96EE', fontWeight: '500' }}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 30,
    // justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    alignSelf: 'center',
    marginBottom: 10,
  },
  subtext: {
    color: '#888',
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 15,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1EDFD',
    borderRadius: 12,
    paddingHorizontal: 14,
    marginBottom: 16,
    height: 50,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: 'contain',
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
  agreementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#999',
    marginRight: 10,
  },
  agreementText: {
    color: '#000',
    fontSize: 13,
  },
  linkText: {
    color: '#1D96EE',
    textDecorationLine: 'underline',
  },
  signUpBtn: {
    backgroundColor: '#1D96EE',
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
  },
  signUpText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

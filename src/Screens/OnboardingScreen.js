import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }) => {
  const handleNext = () => {
    navigation.replace('Welcome'); // Replace with your next screen
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/img.jpg')}
        style={styles.image}
        // resizeMode="contain"
      />
      <View style={{marginHorizontal: 30, paddingVertical: 20}}>
        <Text style={styles.title}>Consulting</Text>
      <Text style={styles.title}>with Trusted Doctors</Text>
      </View>
      <View style={styles.dotsContainer}>
        <View style={{flexDirection: 'row',
    marginTop: 30,}}>
            <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        </View>
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Image style={styles.nextArrow}  source={require('../../assets/arrow-right.png')}/>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    // justifyContent: 'center',
    paddingTop: 60,
    paddingBottom: 40,
  },
  image: {
    // width: width * 0.95,
    width: 330,
    // borderWidth: 2,
      alignSelf: 'center',
      justifyContent: 'center',
    height: 410,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#222',
    // marginTop: 10,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 120,
    marginHorizontal: 30,
  },
  dot: {
    width: 20,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#1D96EE',
    width: 20,
  },
  nextButton: {
    position: 'absolute',
    // bottom: 40,
    right: 10,
    backgroundColor: '#1D96EE',
    padding: 15,
    borderRadius: 50,
  },
  nextArrow: {
    width: 20,
    height: 20,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;

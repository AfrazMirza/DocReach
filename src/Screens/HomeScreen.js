import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
  Easing,
} from 'react-native';

const doctors = [
  {
    id: '1',
    name: 'Dr. Ayesha Singh',
    specialization: 'Cardiologist',
    experience: '10+ Years',
    rating: '4.8',
    image: require('../../assets/Doctor2.png'),
  },
  {
    id: '2',
    name: 'Dr. Ravi Sharma',
    specialization: 'Dentist',
    experience: '7 Years',
    rating: '4.5',
    image: require('../../assets/Doctor10.png'),
  },
  {
    id: '3',
    name: 'Dr. Neha Patel',
    specialization: 'Pediatrician',
    experience: '5 Years',
    rating: '4.6',
    image: require('../../assets/Doctor3.png'),
  },
  {
    id: '4',
    name: 'Dr. Akshay Rao',
    specialization: 'Orthopedic',
    experience: '8 Years',
    rating: '4.7',
    image: require('../../assets/Doctor5.png'),
  },
  {
    id: '5',
    name: 'Dr. Priya Menon',
    specialization: 'Gynecologist',
    experience: '12 Years',
    rating: '4.9',
    image: require('../../assets/Doctor4.png'),
  },
   {
  id: '6',
  name: 'Dr. Karan Mehta',
  specialization: 'Neurologist',
  experience: '9 Years',
  rating: '4.6',
  image: require('../../assets/Doctor8.png'),
},
{
  id: '7',
  name: 'Dr. Sneha Reddy',
  specialization: 'Dermatologist',
  experience: '6 Years',
  rating: '4.5',
  image: require('../../assets/Doctor6.png'),
},
{
  id: '8',
  name: 'Dr. Arjun Malhotra',
  specialization: 'ENT Specialist',
  experience: '10 Years',
  rating: '4.7',
  image: require('../../assets/Doctor9.png'),
},
{
  id: '9',
  name: 'Dr. Meera Joshi',
  specialization: 'Psychiatrist',
  experience: '11 Years',
  rating: '4.9',
  image: require('../../assets/Doctor11.png'),
},
{
  id: '10',
  name: 'Dr. Rohan Desai',
  specialization: 'General Physician',
  experience: '4 Years',
  rating: '4.4',
  image: require('../../assets/Doctor1.png'),
}
];

const HomeScreen = ({ navigation }) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const renderDoctor = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('DoctorProfile', { doctor: item })}
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.spec}>{item.specialization}</Text>
        <Text style={styles.detail}>Experience: {item.experience}</Text>
        <Text style={styles.rating}>Rating: ⭐ {item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Consult With Your Doctor</Text>
      <FlatList
        data={doctors}
        keyExtractor={(item) => item.id}
        renderItem={renderDoctor}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4f7', padding: 15 },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    alignSelf: 'center',
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 15,
    padding: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  image: { width: 70, height: 70, borderRadius: 35, borderWidth: 0.5, marginRight: 15 },
  info: { flex: 1 },
  name: { fontSize: 18, fontWeight: 'bold', color: '#222' },
  spec: { color: '#555', fontWeight: '500', marginTop: 4 },
  detail: { color: '#777', fontSize: 13, marginTop: 2 },
  rating: { color: '#1D96EE', fontWeight: 'bold', fontSize: 13, marginTop: 4 },
});

export default HomeScreen;

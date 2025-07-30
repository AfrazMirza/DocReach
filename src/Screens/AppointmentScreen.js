import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

const slots = ['10:00 AM', '11:30 AM', '2:00 PM', '4:00 PM'];

const AppointmentScreen = ({ route, navigation }) => {
  const { doctor } = route.params;
  const [selected, setSelected] = useState(null);

  const confirmBooking = () => {
  if (selected) {
    Alert.alert(
      'Appointment Confirmed',
      `You booked with ${doctor.name} at ${selected}`,
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Home', { doctor }), // ✅ Navigate back
        },
      ]
    );
  } else {
    Alert.alert('Missing Information', 'Please select a time slot before confirming.');
  }
};


  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Text style={styles.title}>Book your consultation with</Text>
      <Text style={styles.doctorName}>{doctor.name}</Text>
      <Text style={styles.subtitle}>  {doctor.specialization} | {doctor.experience} | ⭐ {doctor.rating}</Text> */}

<View style={styles.doctorCard}>
  <Text style={styles.doctorName}>{doctor.name}</Text>
  <Text style={styles.cardInfo}>{doctor.specialization}</Text>
  <Text style={styles.cardInfo}>{doctor.experience} · ⭐ {doctor.rating}</Text>
</View>


      <View style={styles.slotContainer}>
        {slots.map((slot, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.slot, selected === slot && styles.selectedSlot]}
            onPress={() => setSelected(slot)}
          >
            <Text style={[styles.slotText, selected === slot && styles.selectedSlotText]}>
              {slot}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.bookBtn} onPress={confirmBooking}>
        <Text style={styles.bookText}>Confirm Appointment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 40,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginVertical: 10,
  },
  doctorName: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#444',
  },
  slotContainer: {
    flexDirection: 'row',
    marginVertical: 40,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  slot: {
    width: '47%',
    paddingVertical: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 14,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  selectedSlot: {
    backgroundColor: '#1D96EE',
    borderColor: '#1D96EE',
  },
  slotText: {
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
  },
  selectedSlotText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bookBtn: {
    marginTop: 30,
    backgroundColor: '#1D96EE',
    paddingVertical: 16,
    borderRadius: 30,
    elevation: 3,
  },
  bookText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  doctorCard: {
  backgroundColor: '#fff',
  borderRadius: 12,
  padding: 16,
  marginBottom: 20,
  elevation: 2,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  alignItems: 'center',
},
cardInfo: {
  fontSize: 14,
  color: '#666',
  marginTop: 4,
},

});

export default AppointmentScreen;

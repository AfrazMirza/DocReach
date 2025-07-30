import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const specializationInfo = {
  Cardiologist:
    'Cardiologists specialize in diagnosing and treating diseases related to the heart and blood vessels. They help manage conditions like hypertension, heart attacks, and arrhythmias.',
  Dentist:
    'Dentists deal with oral health, including teeth, gums, and mouth. They perform procedures like fillings, root canals, cleanings, and extractions.',
  Pediatrician:
    'Pediatricians specialize in the health and medical care of infants, children, and adolescents, ensuring they grow up healthy and strong.',
  Orthopedic:
    'Orthopedic doctors treat issues related to bones, joints, ligaments, tendons, and muscles. They manage fractures, arthritis, and spine disorders.',
  Gynecologist:
    "Gynecologists focus on women's reproductive health. They treat issues related to menstruation, fertility, pregnancy, and menopause.",
  Neurologist:
    "Neurologists treat disorders of the brain, spine, and nerves. They deal with conditions like epilepsy, stroke, Parkinson's, and migraines.",
  Dermatologist:
    'Dermatologists handle skin, hair, and nail conditions. They manage acne, eczema, psoriasis, and perform skin examinations.',
  'ENT Specialist':
    'ENT specialists, or otolaryngologists, treat conditions related to the ear, nose, and throat, including sinus infections, hearing issues, and tonsillitis.',
  Psychiatrist:
    'Psychiatrists diagnose and treat mental illnesses like depression, anxiety, and bipolar disorder. They can also prescribe medication.',
  'General Physician':
    'General physicians provide routine health checkups, diagnose common illnesses, and refer patients to specialists when needed.',
};

const doctorDetails = {
  1: {
    clinic: 'City Heart Clinic',
    fee: '₹600',
    address: '12-A, MG Road, Delhi 110001',
    contact: '+91 98765 43210',
  },
  2: {
    clinic: 'Bright Smile Dental',
    fee: '₹300',
    address: '22-B, Park Street, Kolkata 700016',
    contact: '+91 91234 56789',
  },
  3: {
    clinic: 'KidzCare Hospital',
    fee: '₹450',
    address: '9-C, Jawahar Nagar, Jaipur 302004',
    contact: '+91 99887 66554',
  },
  4: {
    clinic: 'OrthoPlus Center',
    fee: '₹500',
    address: '45-B, Baner Road, Pune 411045',
    contact: '+91 88990 11223',
  },
  5: {
    clinic: "Women's Wellness",
    fee: '₹550',
    address: '13-C, Anna Nagar, Chennai 600040',
    contact: '+91 77665 44332',
  },
  6: {
    clinic: 'NeuroHealth Clinic',
    fee: '₹700',
    address: '88-G, Sector 18, Noida 201301',
    contact: '+91 98989 12121',
  },
  7: {
    clinic: 'SkinGlow Clinic',
    fee: '₹400',
    address: '7-D, Koregaon Park, Pune 411001',
    contact: '+91 90909 80808',
  },
  8: {
    clinic: 'SoundCare ENT',
    fee: '₹350',
    address: '34-F, Banjara Hills, Hyderabad 500034',
    contact: '+91 98220 33445',
  },
  9: {
    clinic: 'MindWell Psychiatry',
    fee: '₹600',
    address: '10-A, Indiranagar, Bangalore 560038',
    contact: '+91 95678 22334',
  },
  10: {
    clinic: 'WellLife General Hospital',
    fee: '₹400',
    address: '28-E, CG Road, Ahmedabad 380009',
    contact: '+91 90909 19191',
  },
};

const DoctorProfile = ({ route, navigation }) => {
  const { doctor } = route.params;
  const details = doctorDetails[doctor.id] || {
    clinic: 'HealthCare Centre',
    fee: '₹500',
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.center}>
        <Image source={doctor.image} style={styles.profileImage} />
        <Text style={styles.name}>{doctor.name}</Text>
        <Text style={styles.spec}>{doctor.specialization}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.info}>
          <Text style={styles.infoHeading}>Experience:</Text>{' '}
          {doctor.experience}
        </Text>
        <Text style={styles.info}>
          <Text style={styles.infoHeading}>Rating: </Text>⭐ {doctor.rating}
        </Text>
        <Text style={styles.info}>
          <Text style={styles.infoHeading}>Clinic: </Text>
          {details.clinic}
        </Text>
        <Text style={styles.info}>
          <Text style={styles.infoHeading}>Address: </Text>
          {details.address}
        </Text>
        <Text style={styles.info}>
          <Text style={styles.infoHeading}>Contact: </Text>
          {details.contact}
        </Text>
        <Text style={styles.info}>
          <Text style={styles.infoHeading}>Fees: </Text>
          {details.fee}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          What does a {doctor.specialization} do?
        </Text>
        <Text style={styles.sectionText}>
          {specializationInfo[doctor.specialization] ||
            'Specialization info not available.'}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Appointment', { doctor })}
      >
        <Text style={styles.buttonText}>Book Appointment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  center: { alignItems: 'center', marginTop: 25 },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 0.5,
    marginBottom: 12,
  },
  name: { fontSize: 22, fontWeight: 'bold' },
  spec: { fontSize: 16, color: '#666', marginBottom: 12 },
  infoBox: { paddingHorizontal: 25, marginTop: 10 },
  info: { fontSize: 14, marginBottom: 5, color: '#444' },
  infoHeading: {
    fontSize: 14,
    fontWeight: '600',
  },
  section: {
    marginTop: 25,
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#333',
  },
  sectionText: { fontSize: 14, color: '#555', lineHeight: 20 },
  button: {
    marginTop: 70,
    backgroundColor: '#1D96EE',
    padding: 15,
    borderRadius: 30,
    width: '85%',
    alignSelf: 'center',
  },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
});

export default DoctorProfile;

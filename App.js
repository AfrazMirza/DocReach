import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/Screens/SplashScreen';
import LoginScreen from './src/Screens/LoginScreen';
import HomeScreen from './src/Screens/HomeScreen';
import DoctorProfile from './src/Screens/DoctorProfile';
import AppointmentScreen from './src/Screens/AppointmentScreen';
import OnboardingScreen from './src/Screens/OnboardingScreen';
import WelcomeScreen from './src/Screens/WelcomeScreen';
import Register from './src/Screens/Register';

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLoading ? 'Splash' : 'Login'}
        screenOptions={{
          headerStyle: { backgroundColor: '#1D96EE' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        {isLoading && (
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        )}
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Doctors' }} />
        <Stack.Screen name="DoctorProfile" component={DoctorProfile} options={{ title: 'Profile' }} />
        <Stack.Screen name="Appointment" component={AppointmentScreen} options={{ title: 'Book Appointment' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

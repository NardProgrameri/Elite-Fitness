import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

// Import all screens
import HomeScreen from './src/screens/HomeScreen';
import BmiScreen from './src/screens/BmiScreen';
import SleepScreen from './src/screens/SleepScreen';
import MedicineScreen from './src/screens/MedicineScreen';
import StepsScreen from './src/screens/StepsScreen';
import WorkoutScreen from './src/screens/WorkoutScreen';
import ShopScreen from './src/screens/ShopScreen';
import ArticlesScreen from './src/screens/ArticlesScreen'; // NEW

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'BMI') iconName = 'heartbeat';
            else if (route.name === 'Sleep') iconName = 'moon-o';
            else if (route.name === 'Medicine') iconName = 'medkit';
            else if (route.name === 'Steps') iconName = 'heartbeat';
            else if (route.name === 'Workout') iconName = 'calendar';
            else if (route.name === 'Shop') iconName = 'shopping-cart';
            else if (route.name === 'Articles') iconName = 'book';
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FF6B6B',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: '#1A1A2E' },
          headerStyle: { backgroundColor: '#1A1A2E' },
          headerTintColor: '#fff',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="BMI" component={BmiScreen} />
        <Tab.Screen name="Sleep" component={SleepScreen} />
        <Tab.Screen name="Medicine" component={MedicineScreen} />
        <Tab.Screen name="Steps" component={StepsScreen} />
        <Tab.Screen name="Workout" component={WorkoutScreen} />
        <Tab.Screen name="Shop" component={ShopScreen} />
        <Tab.Screen name="Articles" component={ArticlesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
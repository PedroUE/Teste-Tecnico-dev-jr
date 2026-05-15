import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

import HabilidadeScreens from './screens/HabilidadesScreens';
import PerfilScreen from './screens/PerfilScreen';  
import ProjetosScreens from './screens/ProjetosScreens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  emoji: {
    fontSize: 64,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
  },
});

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dev Jr</Text>
      <Text style={styles.subtitle}>Perfil do Desenvolvedor</Text>
    </View>
  );
}

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Habilidades" component={HabilidadeScreens} />
            <Stack.Screen name="Projetos" component={ProjetosScreens} />
            <Stack.Screen name="Perfil" component={PerfilScreen} />
        </Stack.Navigator>
    );
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Habilidades') {
              iconName = 'code-slash';
            } else if (route.name === 'Projetos') {
              iconName = 'folder';
            } else if (route.name === 'Perfil') {
              iconName = 'person';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#333',
          tabBarInactiveTintColor: '#999',
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="Habilidades" component={HabilidadeScreens} />
        <Tab.Screen name="Projetos" component={ProjetosScreens} />
        <Tab.Screen name="Perfil" component={PerfilScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
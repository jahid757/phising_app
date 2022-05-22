import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/screen/Home';
import Login from './src/screen/Login';
import Register from './src/screen/Register';

const Drawer = createDrawerNavigator();

export default function App() {
  const logIn = false;
  return (
    <>
      {
        logIn ? (
          <NavigationContainer>
            <Drawer.Navigator>
              <Drawer.Screen name="Home" component={Home} />
            </Drawer.Navigator>
          </NavigationContainer>
        ) : (
          <NavigationContainer>
            <Drawer.Navigator screenOptions={{
              headerShown: false
            }}>
              <Drawer.Screen name="Login" component={Login} />
              <Drawer.Screen name="Register" component={Register} />
            </Drawer.Navigator>
          </NavigationContainer>
        )
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('App', () => App);
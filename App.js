import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View , Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/home'
import SignUp from './src/screens/signup'
import ForgePass from './src/screens/forgePass'
import Todo from './src/screens/todo'
const Stack = createStackNavigator();
/* {Platform.OS === 'ios' && <StatusBar barStyle="default" />} */
export default function App(props) {
    
    return (
      <NavigationContainer >
          <Stack.Navigator>
              <Stack.Screen name = "home" component = {Home} options = {{title:"Login"}}/>
              <Stack.Screen name = "Signup" component = {SignUp} 
              options = {
                  {
                    title : "Sign Up",
                    headerLeft : () => {
                      return ""
                  }
              }}/>
              <Stack.Screen name = "forget" component = {ForgePass}
               options = {
                  {
                    title : "forgetPassword",
                    headerLeft : () => ""
                  }
              }/>
              <Stack.Screen name = "todo" component = {Todo} 
              options = {
                  {
                    title : "",
                    headerLeft : () => ""
                  }
                }
              />
          </Stack.Navigator>
      </NavigationContainer>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems : "center"
  },
});

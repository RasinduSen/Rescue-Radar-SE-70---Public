import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AppStart from './AppStart';


  {/*<NavigationContainer>
    <stack.Navigator  initialRouteName='Login' screenOptions={{
         headerShown: false
      }} >

      <stack.Screen name="Login" component={Login} />
      <stack.Screen name="signup" component={Signup} />
      <stack.Screen name="appstart" component={AppStart}/>
    </stack.Navigator>


  </NavigationContainer>
    */}

export default function App() {
  return (
     
<AppStart></AppStart>

    
    
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

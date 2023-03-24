// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteData } from './utill/constant/routesData';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Splash"}
        screenOptions={{
          headerShown: false,
          gesturesEnabled: false
        }}
      >
        {RouteData.map((item, index) => {
          return (
            <Stack.Screen
              key={index}
              name={item.name}
              component={item.componant}
              options={item.options !== undefined ? item.options : null}  />
          )
        })}

        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
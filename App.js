import 'react-native-gesture-handler';

import * as React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import DetailsScreen from './components/details';
import HomeScreen from './components/home';
import LogoTitle from './components/logotitle';

const Stack = createNativeStackNavigator();



function StackScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Root" 
        component={HomeScreen} 
        options={{ headerShown: false }} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: 'gray' },
            headerTintColor: 'darkgreen', 
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert('This button could show more information about item')}
                title="Show More"
                color="gray"
              />
            ),
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackScreen;
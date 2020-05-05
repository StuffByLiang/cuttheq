import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet, View} from 'react-native';

import MapScreen from './screens/MapScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Map">
            <Stack.Screen options={{headerShown: false}} name="Map" component={MapScreen} />
            <Stack.Screen options={{headerShown: false}} name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
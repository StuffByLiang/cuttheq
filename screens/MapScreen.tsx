import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import Map from '../components/Map';

export default function MapScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Map navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
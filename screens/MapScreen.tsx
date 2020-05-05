import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import Map from '../components/Map';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <Map />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
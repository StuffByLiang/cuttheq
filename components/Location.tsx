import React from 'react';
import { Marker, MarkerProps } from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';

export default class Location extends Marker {
  render() {
    let { markers } = this.state;
    return (
      <MapView 
        style={styles.mapStyle}
        initialRegion={{
          latitude: 49.264788,
          longitude: -123.252812,
          latitudeDelta: 0.007,
          longitudeDelta: 0.007,
        }}
      >
        {markers.map((marker, i: Number) => (
          <Marker
            key= {i.toString()}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
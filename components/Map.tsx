import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';

export interface MapProps {

}

export interface MapState {
  markers: Array<MarkerEntry>
}

export interface MarkerEntry {
  latlng: {
    latitude: number,
    longitude: number,
  },
  title: string,
  description: string
}

export default class Map extends React.Component<MapProps, MapState> {
  constructor(props: MapProps) {
    super(props);
    this.state = {
      markers: [
        {
          latlng: {
            latitude: 49.2656154,
            longitude: -123.2543038
          },
          title: "Tim Hortons",
          description: "Get your Coffee and donuts"
        }
      ]
    };
  }
  
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
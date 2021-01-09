import React from 'react';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Dimensions, View, Text, Button } from 'react-native';
import DetailsBottomSheet from './DetailsBottomSheet/DetailsBottomSheet';

export interface MapProps {
  navigation: any
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
            latitude: 49.2656312,
            longitude: -123.2541892
          },
          title: "Tim Hortons",
          description: "Get your Coffee and donuts"
        },
        {
          latlng: {
            latitude: 49.2658526,
            longitude: -123.2546264
          },
          title: "Triple O's",
          description: "Some nice hamburgers"
        }
      ]
    };
  }
  
  render() {
    let { markers } = this.state;
    let { navigation } = this.props;
    return (
      <>
        <DetailsBottomSheet />
        <MapView 
        // provider={PROVIDER_GOOGLE}
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
            >
              <Callout>
                <View>
                  <Text style={styles.title}>{marker.title}</Text>
                  <Text>{marker.description}</Text>
                  <Text>Estimated Waiting time: 5 min</Text>
                  <Button
                    title="Go to Details"
                    onPress={() => {console.log('clicked', navigation); navigation.navigate('Details')}}
                  />
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});
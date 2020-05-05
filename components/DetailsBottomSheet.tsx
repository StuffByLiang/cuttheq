import React from 'react';
import Constants from 'expo-constants'
import { StyleSheet, View, Text, Dimensions} from 'react-native';


import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated';
const AnimatedView = Animated.View;
 
export default class DetailsBottomSheet extends React.Component {
  constructor(props) {
    super(props);
  }

  // renderHandler = () => {
  //   const animatedBar1Rotation = (outputRange: number[]) =>
  //     Animated.interpolate(fall, {
  //       inputRange: [0, 1],
  //       outputRange: outputRange,
  //       extrapolate: Animated.Extrapolate.CLAMP,
  //     })

  //   return (
  //     <View style={styles.handlerContainer}>
  //       <AnimatedView
  //         style={[
  //           styles.handlerBar,
  //           {
  //             left: -7.5,
  //             transform: [
  //               {
  //                 rotate: Animated.concat(
  //                   // @ts-ignore
  //                   animatedBar1Rotation([0.3, 0]),
  //                   'rad'
  //                 ),
  //               },
  //             ],
  //           },
  //         ]}
  //       />
  //       <AnimatedView
  //         style={[
  //           styles.handlerBar,
  //           {
  //             right: -7.5,
  //             transform: [
  //               {
  //                 rotate: Animated.concat(
  //                   // @ts-ignore
  //                   animatedBar1Rotation([-0.3, 0]),
  //                   'rad'
  //                 ),
  //               },
  //             ],
  //           },
  //         ]}
  //       />
  //     </View>
  //   )
  // }

  renderContent = () => {
    // let { title, description } = this.props;
    return (
      <View style={styles.bottomSheet}>
        {/* <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text> */}
        <Text style={styles.title}>Tim Hortons</Text>
        <Text>Get your donuts and coffee here</Text>
        <Text>Estimated Waiting time: 5 min</Text>
      </View>
    )
  }

  render() {
    return (
      <BottomSheet
        style={styles.bottomSheet}
        snapPoints = {[50, Dimensions.get('window').height - Constants.statusBarHeight]}
        renderContent = {this.renderContent}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  bottomSheet: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - Constants.statusBarHeight,
    borderRadius: 20,
    padding: 20,
    textAlign: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Handler
  handlerContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: 10,
    height: 20,
    width: 20,
  },
  handlerBar: {
    position: 'absolute',
    backgroundColor: '#D1D1D6',
    top: 5,
    borderRadius: 3,
    height: 5,
    width: 20,
  },
});
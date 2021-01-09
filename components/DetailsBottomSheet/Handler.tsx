import React from 'react';
import Animated from 'react-native-reanimated';
import { View, StyleSheet } from 'react-native';
const AnimatedView = Animated.View;

const Handler = ({ fall }) => {
  const animatedBar1Rotation = (outputRange: number[]) =>
    Animated.interpolate(fall, {
      inputRange: [0, 1],
      outputRange: outputRange,
      extrapolate: Animated.Extrapolate.CLAMP,
    })

  return (
    <View style={styles.handlerContainer}>
      <AnimatedView
        style={[
          styles.handlerBar,
          {
            left: -7.5,
            transform: [
              {
                rotate: Animated.concat(
                  // @ts-ignore
                  animatedBar1Rotation([0.3, 0]),
                  'rad'
                ),
              },
            ],
          },
        ]}
      />
      <AnimatedView
        style={[
          styles.handlerBar,
          {
            right: -7.5,
            transform: [
              {
                rotate: Animated.concat(
                  // @ts-ignore
                  animatedBar1Rotation([-0.3, 0]),
                  'rad'
                ),
              },
            ],
          },
        ]}
      />
    </View>
  )
};

const styles = StyleSheet.create({
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

export default Handler;
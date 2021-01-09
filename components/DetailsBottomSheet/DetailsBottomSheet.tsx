import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableWithoutFeedback} from 'react-native';


import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated'
const AnimatedView = Animated.View
import { getAppHeightWithoutStatusBar } from '../../util/constants';
import Handler from './Handler';

const snapPoints = [
  50,
  getAppHeightWithoutStatusBar()
];
 
export default class DetailsBottomSheet extends React.Component {
  constructor(props) {
    super(props)
    this.bottomSheetRef = React.createRef<BottomSheet>()
    this.fall = new Animated.Value(1)
  }
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

  onFlatListTouchStart = () => {
    this.bottomSheetRef.current.snapTo(0)
  }

  onHeaderPress = () => {
    this.bottomSheetRef.current.snapTo(1)
  }

  renderHeader = () => {
    return (
      <TouchableWithoutFeedback
        onPress={this.onHeaderPress}
      >
        <View>
          <Handler
            fall={this.fall}
          />
        </View>
      </TouchableWithoutFeedback>
    )
  }

  render() {
    return (
      <BottomSheet
        ref={this.bottomSheetRef}
        snapPoints = {snapPoints}
        callbackNode={this.fall}
        renderContent = {this.renderContent}
        renderHeader = {this.renderHeader}
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
    height: getAppHeightWithoutStatusBar(),
    borderRadius: 20,
    padding: 20,
    textAlign: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
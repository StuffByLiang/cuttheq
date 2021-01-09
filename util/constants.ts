import Constants from 'expo-constants'
import { Dimensions} from 'react-native';

export const getAppHeightWithoutStatusBar = () => {
  return Dimensions.get('window').height - Constants.statusBarHeight;
};
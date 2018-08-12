// @flow
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  imageBackground: {
    width,
    height,
  },
});

export default style;

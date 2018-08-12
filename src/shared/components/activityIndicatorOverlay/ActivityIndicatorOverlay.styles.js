// @flow
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1111111,
    width,
    height,

    backgroundColor: '#000000B0',

    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    paddingTop: 10,
    fontSize: 18,
    color: 'white',
  },
});

export default style;

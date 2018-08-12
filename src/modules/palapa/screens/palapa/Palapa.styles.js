// @flow
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
    borderRadius:200
  },
  flashContainer: {
    flex:1,
    marginLeft:20,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    zIndex:100
  }
});

export default style;

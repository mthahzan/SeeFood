// @flow
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Switch} from 'react-native';
import {RNCamera} from 'react-native-camera';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import {NavigateToResultsScreen} from '../../../../navigation/root/RootNavigation.actions';
import {IcomoonIconComponent} from '../../../../shared/components';

import styles from './Palapa.styles';

type PalapaProps = {
  navigation: any,
};
type PalapaState = {
  camFlash: bool,
  waitingForData: bool,
};

class PalapaScreen extends React.PureComponent<PalapaProps, PalapaState> {
  static defaultProps: any

  constructor(props: PalapaProps) {
    super(props);

    this.state = {
      camFlash: false,
      waitingForData: false,
    }
  }

  renderContent = (): ReactElement<any> => {
    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={this.state.camFlash ? RNCamera.Constants.FlashMode.on : RNCamera.Constants.FlashMode.off}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        >
          {({ camera, status }) => {
            if (status !== 'READY') return <View />;
            return (
              <View style={{ width:'100%', flexDirection: 'row', justifyContent: 'center'}}>
              
                <View style={{  width:'100%',flexDirection: 'row',zIndex:1000}}>
                    <View style={styles.flashContainer}>
                      
                    </View>
                    <View style={{flex:1}}>             
                    <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                      <IcomoonIconComponent name="camera" size={30} color='black'  />
                    </TouchableOpacity>
                    </View>        
                    <View style={styles.flashContainer}>
                      <IcomoonIconComponent name="flash" size={25} color='white'  />
                      <Switch value={this.state.camFlash} onValueChange={this.flashValueChanged}/>
                    </View>
                  </View>
                  <LinearGradient colors={['#00000000', '#000000']} style={{ height:120, width:'100%', position:'absolute',bottom:-5, zIndex:0}}>
                  
                  </LinearGradient>
              </View>
            );
          }}
        </RNCamera>
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }

  flashValueChanged = (val) => {
    this.setState({
      camFlash: val
    });
  }

  takePicture = async (camera) => {
    const options = {quality: 0.1, base64: true};
    const data = await camera.takePictureAsync(options);
    const image = data.base64;
    
    NavigateToResultsScreen(this.props.navigation, {image});
  }
}

PalapaScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};

PalapaScreen.defaultProps = {};

export default PalapaScreen;

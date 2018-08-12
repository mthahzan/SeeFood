// @flow
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Switch} from 'react-native';
import {RNCamera} from 'react-native-camera';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import {ActivityIndicatorOverlayComponent} from '../../../../shared/components';

import styles from './Palapa.styles';

type PalapaProps = {};
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

  renderActivityIndicator = (): ReactElement<any> => {
    return (
      <ActivityIndicatorOverlayComponent busy={this.state.waitingForData} />
    )
  }

  renderContent = (): ReactElement<any> => {
    return (
      <View style={styles.container}>
        {this.renderActivityIndicator()}

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
            <View style={{backgroundColor: 'red', width:'100%',flexDirection: 'row'}}>
              <View style={styles.flashContainer}>
                
              </View>
              <View style={{flex:1}}>             
              <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                <Text style={{ fontSize: 14 }}> See Food </Text>
              </TouchableOpacity>
              </View>        
              <View style={styles.flashContainer}>
                <Text style={{ marginTop:3, color:'white', marginRight:3}}>FLASH</Text>
                <Switch value={this.state.camFlash} onValueChange={this.flashValueChanged}/>
              </View>
            </View>
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
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    console.log(data.uri);
  }
}

PalapaScreen.propTypes = {};

PalapaScreen.defaultProps = {};

export default PalapaScreen;

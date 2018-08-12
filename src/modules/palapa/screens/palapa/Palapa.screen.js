// @flow
import React from 'react';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

import styles from './Palapa.styles';

type PalapaProps = {};
type PalapaState = {};

class PalapaScreen extends React.PureComponent<PalapaProps, PalapaState> {
  static defaultProps: any

  constructor(props: PalapaProps) {
    super(props);
  }

  renderContent = (): ReactElement<any> => {
    return (
      <RNCamera
      style={styles.preview}
      type={RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.on}
      permissionDialogTitle={'Permission to use camera'}
      permissionDialogMessage={'We need your permission to use your camera phone'}
    >
      {({ camera, status }) => {
        if (status !== 'READY') return <View />;
        return (
          <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
              <Text style={{ fontSize: 14 }}> SNAP </Text>
            </TouchableOpacity>
          </View>
        );
      }}
    </RNCamera>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }

  takePicture = async function(camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    console.log(data.uri);
  }
}

PalapaScreen.propTypes = {};

PalapaScreen.defaultProps = {};

export default PalapaScreen;

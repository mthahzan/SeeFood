// @flow
import React from 'react';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Switch } from 'react-native';
import { RNCamera } from 'react-native-camera';
import  LinearGradient  from 'react-native-linear-gradient';
 

import {ActivityIndicatorOverlayComponent} from '../../../../shared/components';

import styles from './ProResult.styles';
import IcomoonComponent from '../../../../shared/components/icomoonIcon/IcomoonIcon.component';

type ProResultProps = {};
type ProResultState = {
  camFlash: bool,
  waitingForData: bool,
};

class ProResultScreen extends React.PureComponent<ProResultProps, ProResultState> {
  static defaultProps: any

  constructor(props: ProResultProps) {
    super(props);

    this.state = {

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
        
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }


}

ProResultScreen.propTypes = {};

ProResultScreen.defaultProps = {};

export default ProResultScreen;

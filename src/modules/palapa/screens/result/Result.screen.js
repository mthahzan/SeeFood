// @flow
import React from 'react';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Switch } from 'react-native';
import { RNCamera } from 'react-native-camera';
import  LinearGradient  from 'react-native-linear-gradient';
 

import {ActivityIndicatorOverlayComponent} from '../../../../shared/components';

import styles from './Result.styles';
import IcomoonComponent from '../../../../shared/components/icomoonIcon/IcomoonIcon.component';

type ResultProps = {};
type ResultState = {
  camFlash: bool,
  waitingForData: bool,
};

class ResultScreen extends React.PureComponent<ResultProps, ResultState> {
  static defaultProps: any

  constructor(props: ResultProps) {
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

ResultScreen.propTypes = {};

ResultScreen.defaultProps = {};

export default ResultScreen;

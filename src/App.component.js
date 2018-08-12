// @flow
import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import styles from './App.styles';

type AppProps = {};
type AppState = {};

class AppComponent extends React.PureComponent<AppProps, AppState> {
  static defaultProps: any
  
  constructor(props: AppProps) {
    super(props);
  }

  renderContent = (): ReactElement<any> => {
    return (
      <View style={styles.container}>
        {/* Add your elements here. Make sure you break the renders into clean functions */}
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

AppComponent.propTypes = {};

AppComponent.defaultProps = {};

export default AppComponent;

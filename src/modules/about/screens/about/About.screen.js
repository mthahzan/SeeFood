// @flow
import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import styles from './About.styles';

type AboutProps = {};
type AboutState = {};

class AboutScreen extends React.PureComponent<AboutProps, AboutState> {
  static defaultProps: any

  constructor(props: AboutProps) {
    super(props);
  }

  renderContent = (): ReactElement<any> => {
    return (
      <View style={styles.container}>
        <Text>
          About Screen
        </Text>
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

AboutScreen.propTypes = {};

AboutScreen.defaultProps = {};

export default AboutScreen;

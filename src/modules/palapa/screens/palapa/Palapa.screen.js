// @flow
import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

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
      <View style={styles.container}>
        <Text>
          Palapa Screen
        </Text>
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

PalapaScreen.propTypes = {};

PalapaScreen.defaultProps = {};

export default PalapaScreen;

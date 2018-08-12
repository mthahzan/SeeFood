// @flow
import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import styles from './ActivityIndicatorOverlay.styles';

type ActivityIndicatorOverlayProps = {
  busy: bool,
  text: string | null,
};
type ActivityIndicatorOverlayState = {};

class ActivityIndicatorOverlayComponent extends React.PureComponent<ActivityIndicatorOverlayProps, ActivityIndicatorOverlayState> {
  static defaultProps: any

  constructor(props: ActivityIndicatorOverlayProps) {
    super(props);
  }

  renderContent = (): ReactElement<any> => {
    const {busy, text} = this.props;
    let result = null;

    if (busy) {
      result = (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
          <Text style={styles.text}>
            {text}
          </Text>
        </View>
      );
    }

    return result;
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

ActivityIndicatorOverlayComponent.propTypes = {
  busy: PropTypes.bool,
  text: PropTypes.string,
};

ActivityIndicatorOverlayComponent.defaultProps = {
  text: 'Evaluating...',
};

export default ActivityIndicatorOverlayComponent;

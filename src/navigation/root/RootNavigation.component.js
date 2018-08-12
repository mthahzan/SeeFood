// @flow
import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import RootRoutes, {ROOT_NAV_PALAPA} from './RootNavigation.routes';

import styles from './RootNavigation.styles';

type RootNavigationProps = {};
type RootNavigationState = {};

class RootNavigationComponent extends React.PureComponent<RootNavigationProps, RootNavigationState> {
  static defaultProps: any

  constructor(props: RootNavigationProps) {
    super(props);
  }

  componentWillMount() {
    const config = {
      initialRouteName: ROOT_NAV_PALAPA,
      headerMode: 'none',
    };

    this._rootStackNavigation = createStackNavigator(RootRoutes, config);
  }

  _rootStackNavigation = null

  renderContent = (): ReactElement<any> => {
    const Navigation = this._rootStackNavigation;

    return (
      <Navigation />
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

RootNavigationComponent.propTypes = {};

RootNavigationComponent.defaultProps = {};

export default RootNavigationComponent;

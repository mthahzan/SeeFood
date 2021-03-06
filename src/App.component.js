// @flow
import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import RootNavigation from './navigation/root/RootNavigation.component';
import {IcomoonIconComponent} from './shared/components';

import styles from './App.styles';

type AppProps = {};
type AppState = {};

class AppComponent extends React.PureComponent<AppProps, AppState> {
  static defaultProps: any
  
  constructor(props: AppProps) {
    super(props);
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  renderContent = (): ReactElement<any> => {
    return (
      <RootNavigation />
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

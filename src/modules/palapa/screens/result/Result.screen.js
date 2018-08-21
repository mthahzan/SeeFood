// @flow
import React from 'react';
import {Text, View, Image} from 'react-native';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import {NavigateToProResultsScreen} from '../../../../navigation/root/RootNavigation.actions';
import {checkPalapaOfMyLife, checkPalapaOfMyLifeSuccess, checkPalapaOfMyLifeFailure} from '../../../../api/Palapa';
import {ActivityIndicatorOverlayComponent, IcomoonIconComponent} from '../../../../shared/components';

import styles from './Result.styles';

type ResultProps = {
  navigation: any,
};
type ResultState = {};

class ResultScreen extends React.PureComponent<ResultProps, ResultState> {
  static defaultProps: any

  constructor(props: ResultProps) {
    super(props);

    this.state = {
      image: props.navigation.state.params.image,
      waitingForData: false,
      result: null,
    }
  }

  componentDidMount() {
    this.setState({
      waitingForData: true,
    });
    this.resolvePalapa(this.state.image);
  }

  resolvePalapa = async (image: string): Promise<void> => {
    const result = await checkPalapaOfMyLifeFailure();

    NavigateToProResultsScreen(this.props.navigation, {response: result, image: this.state.image});
  }

  renderActivityIndicator = (): ReactElement<any> => {
    return (
      <ActivityIndicatorOverlayComponent busy={this.state.waitingForData} />
    )
  }

  renderContent = (): ReactElement<any> => {
    const {image} = this.props.navigation.state.params;
    const source = {uri: `data:image/png;base64,${image}`};

    return (
      <View style={styles.container}>
        {this.renderActivityIndicator()}
        <Image style={styles.imageBackground} scaleMode="contain" source={source} />
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

ResultScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};

ResultScreen.defaultProps = {};

export default ResultScreen;

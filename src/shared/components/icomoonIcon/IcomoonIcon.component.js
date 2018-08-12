// @flow
import React from 'react';
import {View} from 'react-native';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import IcomoonConfig from '../../../theme/icomoon/selection.json';

// import styles from './IcomoonComponent.styles';

const IcomoonIcon = createIconSetFromIcoMoon(IcomoonConfig);

type IcomoonComponentProps = {
  color: string | null,
  name: string,
  size: number | null,
};
type IcomoonComponentState = {};

class IcomoonComponent extends React.PureComponent<IcomoonComponentProps, IcomoonComponentState> {
  static defaultProps: any

  constructor(props: IcomoonComponentProps) {
    super(props);
  }

  renderContent = (): ReactElement<any> => {
    return (
      <IcomoonIcon
        color={this.props.color}
        name={this.props.name}
        size={this.props.size}
      />
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

IcomoonComponent.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
};

IcomoonComponent.defaultProps = {
  color: 'black',
  size: 10,
};

export default IcomoonComponent;


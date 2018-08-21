// @flow
import React from 'react';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Switch, Image, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';
import  LinearGradient  from 'react-native-linear-gradient';
 
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

    const {response: {hotdog, result}, image} = props.navigation.state.params;

    this.state = {
      image,
      status: hotdog ? 'HOT DAWG!' : 'Not Hot Dog :(',
      probability: hotdog ? '100%' : `${parseInt(result.score * 100)}%`,
      description: hotdog ? 'Congratz you found a hot dog!' : `This is ${result.description}`,
    }
  }


  renderContent = (): ReactElement<any> => {
    return (
      <View style={styles.container}>
        <Image
          style={{flex:1}}
          source={{uri: `data:image/png;base64,${this.state.image}`}}
        />
        <View
          style={{flex:1}}
          justifyContent="center"
          alignItems="center"
        >
          <Text style={{fontSize:35}}>{this.state.status}</Text>
          <Text style={{fontSize:25}}>{this.state.probability}</Text>
          <Text style={{fontSize:15, marginTop:20, marginBottom:40, }}>{this.state.description}</Text>
        </View>
      </View>
    );
  }

  goBack = () => {
    this.props.navigation.goBack();
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

ProResultScreen.propTypes = {};

ProResultScreen.defaultProps = {};

export default ProResultScreen;

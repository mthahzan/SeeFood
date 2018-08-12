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

    this.state = {
      status: 'HOT DAWG!',
      probability: '90%',
      description: 'Congratz you found a hot dog!',
    }
  }


  renderContent = (): ReactElement<any> => {
    return (
      <View style={styles.container}>
        <Image
          style={{flex:1}}
          source={{uri: 'https://cdn.vox-cdn.com/thumbor/ZiIEB5V3hwxD0CywVPJJkJXFX3c=/0x0:1061x773/1820x1213/filters:focal(447x303:615x471):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/59430399/grpizza.1524049998.png'}}
        />
        <View
          style={{flex:1}}
          justifyContent="center"
          alignItems="center"
        >
          <Text style={{fontSize:35}}>{this.state.status}</Text>
          <Text style={{fontSize:25}}>{this.state.probability}</Text>
          <Text style={{fontSize:15, marginTop:20, marginBottom:40, }}>{this.state.description}</Text>
          <TouchableOpacity style={{padding:10, backgroundColor:'#45c', borderRadius: 5}}  onPress={this.goBack} >
            <Text style={{color: 'white'}}> Okay</Text>
          </TouchableOpacity>
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

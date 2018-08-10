// @flow
import {AppRegistry} from 'react-native';

import AppComponent from './src/App.component';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppComponent);

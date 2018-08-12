// @flow
import {ROOT_NAV_RESULT} from './RootNavigation.routes';

export const NavigateToResultsScreen = (navigation: any, navParams: any = null): void => {
  navigation.navigate(ROOT_NAV_RESULT, navParams);
};

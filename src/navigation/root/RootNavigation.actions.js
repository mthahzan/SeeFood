// @flow
import {ROOT_NAV_RESULT, ROOT_NAV_PRORESULT} from './RootNavigation.routes';

export const NavigateToResultsScreen = (navigation: any, navParams: any = null): void => {
  navigation.navigate(ROOT_NAV_RESULT, navParams);
};

export const NavigateToProResultsScreen = (navigation: any, navParams: any = null): void => {
  navigation.navigate(ROOT_NAV_PRORESULT, navParams);
};

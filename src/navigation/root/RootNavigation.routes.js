// @flow
import PalapaScreen from '../../modules/palapa/screens/palapa/Palapa.screen';
import AboutScreen from '../../modules/about/screens/about/About.screen';
import ResultScreen from '../../modules/palapa/screens/result/Result.screen';

export const ROOT_NAV_PALAPA = 'PalapaScreen';
export const ROOT_NAV_ABOUT = 'About';
export const ROOT_NAV_RESULT= 'ResultScreen';

export default {
  [ROOT_NAV_PALAPA]: {
    screen: PalapaScreen,
    path: `/${ROOT_NAV_PALAPA}`,
  },
  [ROOT_NAV_ABOUT]: {
    screen: AboutScreen,
    path: `/${ROOT_NAV_ABOUT}`,
  },
  [ROOT_NAV_RESULT]: {
    screen: ResultScreen,
    path: `/${ROOT_NAV_RESULT}`,
  },
}

// @flow
import PalapaScreen from '../../modules/palapa/screens/palapa/Palapa.screen';
import AboutScreen from '../../modules/about/screens/about/About.screen';
import ResultScreen from '../../modules/palapa/screens/result/Result.screen';
import ProResultScreen from '../../modules/palapa/screens/proResult/ProResult.screen';

export const ROOT_NAV_PALAPA = 'PalapaScreen';
export const ROOT_NAV_ABOUT = 'About';
export const ROOT_NAV_RESULT= 'ResultScreen';
export const ROOT_NAV_PRORESULT= 'ProResultScreen';

export default {
  [ROOT_NAV_PRORESULT]: {
    screen: ProResultScreen,
    path: `/${ROOT_NAV_PRORESULT}`,
  },
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

// @flow
import {POST} from './Core';

const urlFactory = {
  checkPalapaOfMyLife = () => `/notdog/is-this-the-palapa-of-your-life`,
};

export const checkPalapaOfMyLife = (base64EncodedImage: string): Promise<any> => {
  const endpoint: string = urlFactory.checkPalapaOfMyLife();
  const bodyParams = {data: base64EncodedImage};
  const urlParams = null;
  const headers = {};

  return POST(endpoint, bodyParams, urlParams, headers);
};

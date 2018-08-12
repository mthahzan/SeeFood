// @flow
import {POST} from './Core';

const urlFactory = {
  checkPalapaOfMyLife: () => `/notdog/is-this-the-palapa-of-your-life`,
};

export const checkPalapaOfMyLife = (base64EncodedImage: string): Promise<any> => {
  const endpoint: string = urlFactory.checkPalapaOfMyLife();
  const bodyParams = {data: base64EncodedImage};
  const urlParams = null;
  const headers = {};

  return POST(endpoint, bodyParams, urlParams, headers);
};

export const checkPalapaOfMyLifeSuccess = (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        hotdog: true,
      });
    }, 1000);
  });
};

export const checkPalapaOfMyLifeFailure = (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        hotdog: false,
        result: {
          description: 'Ammage Redda',
          score: 0.67,
        }
      });
    }, 1000);
  });
};

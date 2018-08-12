// @flow

/**
 * API Base URL
 * @type {string}
 */
const BASE_URL: string = `http://10.0.2.2`;

/**
 * Default request headers
 * @type {Object}
 */
const defaultRequestHeaders: {[string]: string} = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

/**
 * Create URL params from given key value pairs
 * @param  {object} params Key value pairs to be converted to URL params
 * @return {string}        Converted URL params string
 */
const createURLParams = (params: {[string]: any} | null): string => {
  let convertedParams = '';

  // Add params to URL if there are any
  if (params) {
    Object
      .keys(params)
      .forEach((key, index) => {
        convertedParams += `${index === 0 ? '?' : '&'}${key}=${(params || {})[key]}`;
      });
  }

  return convertedParams;
};

/**
 * FETCH API doesn't automatically throw an error in case of failed reponse status.
 * We have to handle it ourselves. We handle it by looking at the response code.
 * @param  {Response} response API response
 * @return {Response}          The response is returned if there is no errors thrown
 * @throws {Error}             Throws error if response status is not OK
 */
const handleResponseStatus = async (response) => {
  if (response && response.status < 200 || response.status >= 300) {
    const error: any = new Error(response.statusText);
    error.response = await response.json();

    throw error;
  }

  return response.json();
};

/**
 * Make GET request
 * @param  {string} endpoint The endpoint to call
 * @param  {object} params   URL params object
 * @param  {object} headers  Headers object
 * @return {Promise}         GET request promise
 */
export const GET = async (endpoint: string, params: {[string]: any} | null, headers: {[string]: any} | null): Promise<any> => {
  // Create the request URL
  const url: string = `${BASE_URL}/${endpoint}${createURLParams(params)}`;
  const options: {[string]: any} = {
    headers: {
      // Spread the default request headers
      ...defaultRequestHeaders,

      // Spread the given additional headers
      ...headers,
    },
  };
  const response = await fetch(url, options);

  // Handle the response before returning
  return handleResponseStatus(response);
};

/**
 * Make POST request
 * @param  {string} endpoint The endpoint to call
 * @param  {object} body     POST body
 * @param  {object} params   URL params
 * @param  {object} headers  Headers object
 * @return {Promise}         POST request promise
 */
export const POST = async (
  endpoint: string, body: {[string]: any} | null, params: {[string]: any} | null, headers: {[string]: any} | null
): Promise<any> => {
  // Create the request URL
  const url: string = `${BASE_URL}/${endpoint}${createURLParams(params)}`;
  const options: {[string]: any} = {
    // Request type
    method: 'POST',

    // Add headers
    headers: {
      // Spread the default request headers
      ...defaultRequestHeaders,

      // Spread the given additional headers
      ...headers,
    },

    // Append the requestbody
    body: JSON.stringify(body || {}),
  };
  const response = await fetch(url, options);

  // Handle the response before returning
  return handleResponseStatus(response);
};

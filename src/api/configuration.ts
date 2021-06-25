import axios, {
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import qs from 'qs';
axios.defaults.headers.common['Cache-Control'] =
  'no-cache, no-store, must-revalidate';
axios.defaults.headers.common.Pragma = 'no-cache';
axios.defaults.paramsSerializer = params =>
  qs.stringify(params, {indices: false});
axios.defaults.withCredentials = true;
const baseUrl = 'https://guadalajara-mx.publicbikesystem.net/ube/gbfs/v1/en';

interface clientI {
  headers: Object;
}

function responseBody<T>(response: AxiosResponse): T {
  return response.data.data;
}

const getClient = ({headers: defaultHeaders = {}}: clientI) => {
  const http = (requestData: AxiosRequestConfig): AxiosPromise => {
    const {url, headers = {}} = requestData;
    requestData.url = `${baseUrl}${url}`;
    requestData.headers = {
      ...defaultHeaders,
      ...headers,
    };

    return axios(requestData);
  };
  return http;
};

export {getClient, responseBody};

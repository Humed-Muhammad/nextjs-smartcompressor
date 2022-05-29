import axios from 'axios';

interface Props {
  url: string;
  method: string;
  query?: string;
  body?: any;
  params?: string;
}
export const ApiRequest = async (data: Props) => {
  return axios({
    url: data.url,
    method: data.method,
    data: data.body,
    params: data.params,
  })
    .then(({ data: responseData }) => responseData)
    .catch((error) => error);
};

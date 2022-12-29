import { useFetch } from '../../Hooks/useFetch';

export class API {
  baseAPIUrl = 'http://localhost:4200/api/v1/';
  apiUrl;
  params;
  method;
  bodyData;
  jwt;

  allItems = () => {
    this.method = 'GET';
    const [data] = useFetch(this.baseAPIUrl + this.apiUrl, this.method, this.bodyData, this.jwt);

    return data;
  };
}

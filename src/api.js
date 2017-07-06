// @flow
const baseUrl = 'https://yard.moscow/api/v1';

export function get(requestUrl: string): Promise<*> {
  return fetch(encodeURI(baseUrl + requestUrl)).then(res => res.json());
}

export function post(requestUrl: string): Promise<*> {
  return fetch(encodeURI(baseUrl + requestUrl), { method: 'POST' }).then(res => res.json());
}

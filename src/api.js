// @flow
const baseUrl = 'https://api.jqestate.ru/v1';

export function get(requestUrl: string): Promise<*> {
  return fetch(baseUrl + requestUrl).then(res => res.json());
}

export function post(requestUrl: string): Promise<*> {
  return fetch(baseUrl + requestUrl, { method: 'POST' }).then(res => res.json());
}

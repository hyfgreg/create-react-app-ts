import { API_ENV } from './env';

const END_POINTS: IEndPoints = {
  development: '/api',
  test: 'http://192.168.88.241:9500',
  production: 'http://192.168.88.241:9500',
}

// @ts-ignore
export const END_POINT = END_POINTS[API_ENV];
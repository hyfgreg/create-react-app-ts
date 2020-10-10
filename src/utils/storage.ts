type StorageKey = string;

const set = (key: StorageKey, data: any) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.log('[storage] set error:', err);
    window.localStorage.setItem(key, '');
  }
}

const get = (key: StorageKey) => {
  let jsoned = null;
  try {
    const string = window.localStorage.getItem(key) || '';
    jsoned = JSON.parse(string);
  } catch (err) {
    console.log('[storage] get error:', err);
    jsoned = null;
  }
  return jsoned;
}

const remove = (key: StorageKey) => window.localStorage.removeItem(key);

export default {
  set,
  get,
  remove,
}

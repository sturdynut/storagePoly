'use strict';

const storageMap = new Map();

class Storage {
  get length() {
    return storageMap.size;
  }
  clear() {
    storageMap.clear();
  }
  getItem(key) {
    return storageMap.get(key);
  }
  key(index) {
    return Array.from(storageMap.keys())[index];
  }
  removeItem(key) {
    storageMap.delete(key);
  }
  setItem(key, value) {
    return storageMap.set(key, value);
  }
}

const handler = {
  get: function(target, key) {
    if (Storage.prototype.hasOwnProperty(key)) return target[key];
    if (storageMap.has(key)) return target.getItem(key);
  },
  set: function(target, key, value) {
    return target.setItem(key, value);
  }
}

const g = typeof window === 'undefined' ? global : window;
g.localStorage = new Proxy(new Storage(), handler);
g.sessionStorage = new Proxy(new Storage(), handler);
import './index';

const methods = [
  'getItem',
  'setItem',
  'removeItem',
  'clear'
];

describe('localStorage', () => {
  test('Interface methods', () => {
    expect(localStorage).toBeTruthy();
    methods.forEach(m => expect(typeof localStorage[m]).toEqual('function'));
  });

  test('Setting and getting an item', () => {
    const key = 'myKey';
    const value = 'myValue';
    localStorage.setItem(key, value);

    const returnValue1 = localStorage.getItem(key);
    const returnValue2 = localStorage[key];

    expect(returnValue1).toEqual(value);
    expect(returnValue2).toEqual(value);
  });

  test('Removing an item', () => {
    const key = 'myKey';
    const value = 'myValue';
    const key2 = 'myKey2';
    const value2 = 'myValue2';

    localStorage.setItem(key, value);
    localStorage.setItem(key2, value2);

    expect(localStorage.getItem(key)).toEqual(value);
    expect(localStorage.getItem(key2)).toEqual(value2);

    localStorage.removeItem(key);

    expect(localStorage.getItem(key)).toBeUndefined();
    expect(localStorage.getItem(key2)).toEqual(value2);
  });

  test('Clearing items', () => {
    const items = [ 'cats', 'in', 'snow' ];

    items.forEach(item => localStorage.setItem(item, `${item}-value`));
    items.forEach(item => expect(localStorage.getItem(item)).toEqual(`${item}-value`));

    localStorage.clear();

    items.forEach(item => expect(localStorage.getItem(item)).toBeUndefined());
  });

  test('Length of items', () => {
    const items = [ 'cats', 'in', 'snow' ];
    const expectedLength = items.length;

    items.forEach(item => localStorage.setItem(item, `${item}-value`));

    expect(localStorage.length).toEqual(expectedLength);
  });

  test('Retrieval by key', () => {
    const items = [ 'cats', 'in', 'snow' ];
    const index = 0;
    const expectedKey = items[index];

    items.forEach(item => localStorage.setItem(item, `${item}-value`));

    expect(localStorage.key(index)).toEqual(expectedKey);
  });
});

describe('sessionStorage', () => {
  test('Interface methods', () => {
    expect(sessionStorage).toBeTruthy();
    methods.forEach(m => expect(typeof sessionStorage[m]).toEqual('function'));
  });

  test('Setting and getting an item', () => {
    const key = 'myKey';
    const value = 'myValue';
    sessionStorage.setItem(key, value);

    const returnValue1 = sessionStorage.getItem(key);
    const returnValue2 = sessionStorage[key];

    expect(returnValue1).toEqual(value);
    expect(returnValue2).toEqual(value);
  });

  test('Removing an item', () => {
    const key = 'myKey';
    const value = 'myValue';
    const key2 = 'myKey2';
    const value2 = 'myValue2';

    sessionStorage.setItem(key, value);
    sessionStorage.setItem(key2, value2);

    expect(sessionStorage.getItem(key)).toEqual(value);
    expect(sessionStorage.getItem(key2)).toEqual(value2);

    sessionStorage.removeItem(key);

    expect(sessionStorage.getItem(key)).toBeUndefined();
    expect(sessionStorage.getItem(key2)).toEqual(value2);
  });

  test('Clearing items', () => {
    const items = [ 'cats', 'in', 'snow' ];

    items.forEach(item => sessionStorage.setItem(item, `${item}-value`));
    items.forEach(item => expect(sessionStorage.getItem(item)).toEqual(`${item}-value`));

    sessionStorage.clear();

    items.forEach(item => expect(sessionStorage.getItem(item)).toBeUndefined());
  });

  test('Length of items', () => {
    const items = [ 'cats', 'in', 'snow' ];
    const expectedLength = items.length;

    items.forEach(item => sessionStorage.setItem(item, `${item}-value`));

    expect(sessionStorage.length).toEqual(expectedLength);
  });

  test('Retrieval by key', () => {
    const items = [ 'cats', 'in', 'snow' ];
    const index = 0;
    const expectedKey = items[index];

    items.forEach(item => sessionStorage.setItem(item, `${item}-value`));

    expect(sessionStorage.key(index)).toEqual(expectedKey);
  });
});
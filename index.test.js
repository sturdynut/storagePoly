import './index';

const methods = [
  'getItem',
  'setItem',
  'removeItem',
  'clear'
];

const storageMechansisms = [
  { name: 'localStorage', storage: localStorage },
  { name: 'sessionStorage', storage: sessionStorage }
];

storageMechansisms.forEach(({ name, storage }) => {
  describe(name, () => {
    test(`${name} - Interface methods`, () => {
      expect(storage).toBeTruthy();
      methods.forEach(m => expect(typeof storage[m]).toEqual('function'));
    });

    test(`${name} - Setting and getting an item`, () => {
      const key = 'myKey';
      const value = 'myValue';
      const value2 = 'myValue2';

      sessionStorage.setItem(key, value);
      const returnValue1 = sessionStorage.getItem(key);

      sessionStorage[key] = value;
      const returnValue2 = sessionStorage[key];

      sessionStorage.myKey = value;
      const returnValue3 = sessionStorage.myKey;

      sessionStorage.myKey = value2;

      expect(returnValue1).toEqual(value);
      expect(returnValue2).toEqual(value);
      expect(returnValue3).toEqual(value);
    });

    test(`${name} - Removing an item`, () => {
      const key = 'myKey';
      const value = 'myValue';
      const key2 = 'myKey2';
      const value2 = 'myValue2';

      storage.setItem(key, value);
      storage.setItem(key2, value2);

      expect(storage.getItem(key)).toEqual(value);
      expect(storage.getItem(key2)).toEqual(value2);

      storage.removeItem(key);

      expect(storage.getItem(key)).toBeUndefined();
      expect(storage.getItem(key2)).toEqual(value2);
    });

    test(`${name} - Clearing items`, () => {
      const items = [ 'cats', 'in', 'snow' ];

      items.forEach(item => storage.setItem(item, `${item}-value`));
      items.forEach(item => expect(storage.getItem(item)).toEqual(`${item}-value`));

      storage.clear();

      items.forEach(item => expect(storage.getItem(item)).toBeUndefined());
    });

    test(`${name} - Length of items`, () => {
      const items = [ 'cats', 'in', 'snow' ];
      const expectedLength = items.length;

      items.forEach(item => storage.setItem(item, `${item}-value`));

      expect(storage.length).toEqual(expectedLength);
    });

    test(`${name} - Retrieval by key`, () => {
      const items = [ 'cats', 'in', 'snow' ];
      const index = 0;
      const expectedKey = items[index];

      items.forEach(item => storage.setItem(item, `${item}-value`));

      expect(storage.key(index)).toEqual(expectedKey);
    });
  });
});
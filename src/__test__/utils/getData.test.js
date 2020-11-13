import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Llamar una API retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '123455' }));

    return getData('https://google.com').then(response => {
      expect(response.data).toEqual('123455');
    });
  });
});

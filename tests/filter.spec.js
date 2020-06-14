import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';

import filter from '../src/filter';

chai.use(sinonChai);

describe('Filter', () => {
  const data = [
    { value: 'Banana' },
    { value: 'Maçã' },
    { value: 'Laranja' },
    { value: 'Morango' },
    { value: 'Abacaxi' },
    { value: 'Mamão' },
  ];

  describe('smoke tests', () => {
    it('should exist the filter method', () => {
      expect(filter).to.exist;
    });
  });

  describe('Filter', () => {
    it('should call filter by m', () => {
      const dataFilter = filter(data, 'mam', 'value');
      expect(dataFilter).to.have.been.eqls([{ value: 'Mamão' }]);
    });

    it('should call filter not valid value', () => {
      const dataFilter = filter(data, 'abc', 'value');
      expect(dataFilter).to.have.been.eqls([]);
    });

    it('should call filter empty value', () => {
      const dataFilter = filter(data, '', 'value');
      expect(dataFilter).to.have.been.eqls(data);
    });
  });
});

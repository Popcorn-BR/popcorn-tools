import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';

import currencyFormat from '../src/currencyFormat';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Currency format', () => {
  describe('smoke tests', () => {
    it('should exist the currencyFormat method', () => {
      expect(currencyFormat).to.exist;
    });
  });

  describe('Currency Format', () => {
    it('should call formated R$ 10.00', () => {
      const currency = currencyFormat({ currency: 'BRL', style: 'pt-BR', value: 10 });
      expect(currency).to.have.been.eqls('R$10.00');
    });

    it('should call formated JP¥ 10', () => {
      const currency = currencyFormat({ currency: 'JPY', style: 'ja-JP', value: 10 });
      expect(currency).to.have.been.eqls('¥10');
    });

    it('should call validated default props', () => {
      const currency = currencyFormat({ value: 10 });
      expect(currency).to.have.been.eqls('R$10.00');
    });
    it('should call validated empty value', () => {
      const currency = currencyFormat();
      expect(currency).to.have.been.eqls('R$0.00');
    });
  });
});

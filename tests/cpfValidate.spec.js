import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

global.fetch = require('node-fetch');

import cpfValidate from '../src/cpfValidate'

describe('CPF Validate', () => {

  describe('smoke tests', () => {
    it('should exist the cpfValidate', () => {
      expect(cpfValidate).to.exist;
    });
  })

  describe('CPF Validated', () => {
    it('should call validated true', () => {
      const cpf = cpfValidate('10668552697');
      expect(cpf).to.have.been.eqls(true);
    });

    it('should call validated false', () => {
      const cpf = cpfValidate('10668552698');
      expect(cpf).to.have.been.eqls(false);
    });

    it('should call validated replace true', () => {
      const cpf = cpfValidate('106.685.526-97');
      expect(cpf).to.have.been.eqls(true);
    });

    it('should call validated replace false', () => {
      const cpf = cpfValidate('106.685.526,97');
      expect(cpf).to.have.been.eqls(false);
    });
  });

})

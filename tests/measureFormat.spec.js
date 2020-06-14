import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';

import measureFormat from '../src/measureFormat';

chai.use(sinonChai);

describe('measureFormat', () => {

  describe('smoke tests', () => {
    it('should exist the measureFormat method', () => {
      expect(measureFormat).to.exist;
    });
  });

  describe('measureFormat', () => {
    it('should call measureFormat by 0', () => {
      const value = measureFormat(0);
      expect(value).to.have.been.eqls('0');
    });
    it('should call measureFormat by 100', () => {
      const value = measureFormat(100);
      expect(value).to.have.been.eqls('100');
    });
    it('should call measureFormat by 1000', () => {
      const value = measureFormat(1000);
      expect(value).to.have.been.eqls('1k');
    });
    it('should call measureFormat by 1000000', () => {
      const value = measureFormat(1000000);
      expect(value).to.have.been.eqls('1M');
    });
    it('should call measureFormat by 1000000000', () => {
      const value = measureFormat(1000000000);
      expect(value).to.have.been.eqls('1G');
    });
    it('should call measureFormat by 1000000000000', () => {
      const value = measureFormat(1000000000000);
      expect(value).to.have.been.eqls('1T');
    });
    it('should call measureFormat by 1000000000000000', () => {
      const value = measureFormat(1000000000000000);
      expect(value).to.have.been.eqls('1P');
    });
    it('should call measureFormat by 1000000000000000000', () => {
      const value = measureFormat(1000000000000000000);
      expect(value).to.have.been.eqls('1E');
    });
    it('should call measureFormat by 1000000000000000000000', () => {
      const value = measureFormat(1000000000000000000000);
      expect(value).to.have.been.eqls('1000E');
    });
  });
});

import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';

import mobileCheck from '../src/mobileCheck';

chai.use(sinonChai);

describe('Mobile Check', () => {

  describe('smoke tests', () => {
    it('should exist the mobileCheck method', () => {
      expect(mobileCheck).to.exist;
    });
  });
});

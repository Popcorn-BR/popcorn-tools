import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

global.fetch = require('node-fetch');

import PopcornIBGE from '../src/index'

describe('Municipios', () => {
  let ibge;
  let fetchedStub;
  beforeEach( () => {
    ibge = new PopcornIBGE();

    fetchedStub = sinon.stub(global, 'fetch');
    fetchedStub.resolves({ json: () => {} });
  });

  afterEach( () => {
    fetchedStub.restore();
  });

  describe('smoke testes', () => {
    it('should exist the spotify.search.albums method', () => {
      expect(ibge.municipios).to.exist;
    });
  })

  describe('ibge.municipios', () => {
    it('should call fetch function', () => {
      const municipios = ibge.municipios('mg');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const mg = ibge.municipios('mg');
      expect(fetchedStub).to.have.been.calledWith('https://servicodados.ibge.gov.br/api/v1/localidades/estados/mg/municipios')

      const sc = ibge.municipios('sc');
      expect(fetchedStub).to.have.been.calledWith('https://servicodados.ibge.gov.br/api/v1/localidades/estados/sc/municipios')
    });
  });
})

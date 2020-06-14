import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';

import cpfValidate from '../src/cpfValidate';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('CPF Validate', () => {
    describe('smoke tests', () => {
        it('should exist the cpfValidate', () => {
            expect(cpfValidate).to.exist;
        });
    });

    describe('CPF Validated', () => {
        it('should call validated true', () => {
            const cpf = cpfValidate('45317828791');
            expect(cpf).to.have.been.eqls(true);
        });

        it('should call validated false', () => {
            const cpf = cpfValidate('45317828792');
            expect(cpf).to.have.been.eqls(false);
        });

        it('should call validated replace true', () => {
            const cpf = cpfValidate('453.178.287-91');
            expect(cpf).to.have.been.eqls(true);
        });

        it('should call validated replace false', () => {
            const cpf = cpfValidate('453.178.287,91');
            expect(cpf).to.have.been.eqls(false);
        });
    });
});

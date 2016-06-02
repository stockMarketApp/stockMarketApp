/// <reference path="../typings/tsd.d.ts" />
/// <reference path="string.d.ts" />

import Chai = require('chai');
var expect = Chai.expect;
import just = require('../src/just');

describe('ljust', () => {
    it('justify', () => {
        expect(just.ljust('test', 10, '1')).to.equal('test111111');
    });

    it('justify with space when chars parameter is omitted', () => {
        expect(just.ljust('test', 10)).to.equal('test      ');
    });

    it('justify with multibyte string', () => {
        expect(just.ljust('🍣', 10, '1')).to.equal('🍣111111111');
    });

    it('truncate just with multiple chars', () => {
        expect(just.ljust('test', 10, '1234')).to.equal('test123412');
    });

    it('does not truncate given string when length is short', () => {
        expect(just.ljust('test', 3)).to.equal('test');
        expect(just.ljust('test', -1)).to.equal('test');
    });

    it('justify with multibyte string', () => {
        expect(just.ljust('test', 10, '🍣')).to.equal('test🍣🍣🍣🍣🍣🍣');
    });
});

describe('rjust', () => {
    it('prepends chars before given string', () => {
        expect(just.rjust('test', 10, '1')).to.equal('111111test');
    });

    it('does not truncate given string', () => {
        expect(just.rjust('test', 10, '1234')).to.equal('123412test');
    });
});

describe('String', () => {
    before(() => {
        just();
    });

    it('can be justified', () => {
        expect('test'.ljust(10)).to.equal('test      ');
    });
});

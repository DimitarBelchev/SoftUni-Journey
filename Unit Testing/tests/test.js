const isOddOrEven = require("../index.js");
let expect = require('chai').expect;
let assert = require('chai').assert;

describe('title', function () {
    it('title test', function () {
        let actual = isOddOrEven(undefined);
        assert.equal(actual, undefined);
    });
});
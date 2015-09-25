'use strict';
var
  target = require('../../routes/book'),
  should = require('should'),
  sinon = require('sinon');

describe('book', function () {
  describe('get', function () {
    it('正常レスポンス', function () {
      var
        stub_req = sinon.stub(),
        stub_res = {
          'send': sinon.stub()
        };

      target.get(stub_req, stub_res);
      stub_req.notCalled.should.be.true();

      stub_res.send.withArgs('Get a random book').calledOnce.should.be.true();
    });
  });

  describe('post', function () {
    it('正常レスポンス', function () {
      var
        stub_req = sinon.stub(),
        stub_res = {
          'send': sinon.stub()
        };

      target.post(stub_req, stub_res);
      stub_req.notCalled.should.be.true();

      stub_res.send.withArgs('Add a book').calledOnce.should.be.true();
    });
  });

  describe('put', function () {
    it('正常レスポンス', function () {
      var
        stub_req = sinon.stub(),
        stub_res = {
          'send': sinon.stub()
        };

      target.put(stub_req, stub_res);
      stub_req.notCalled.should.be.true();

      stub_res.send.withArgs('Update the book').calledOnce.should.be.true();
    });
  });
});

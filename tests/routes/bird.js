'use strict';
var
  target = require('../../routes/bird'),
  should = require('should'),
  sinon = require('sinon');

describe('bird', function () {
  describe('root', function () {
    it('正常レスポンス', function () {
      var
        stub_req = sinon.stub(),
        stub_res = {
          'send': sinon.stub()
        };

      target.root(stub_req, stub_res);

      stub_req.notCalled.should.be.true();
      stub_res.send.withArgs('Birds home page').calledOnce.should.be.true();
    });
  });

  describe('about', function () {
    it('正常レスポンス', function () {
      var
        stub_req = sinon.stub(),
        stub_res = {
          'send': sinon.stub()
        };

      target.about(stub_req, stub_res);

      stub_req.notCalled.should.be.true();
      stub_res.send.withArgs('About birds').calledOnce.should.be.true();
    });
  });

  describe('timeLog', function () {
    it('正常レスポンス', function () {
      var
        stub_next = sinon.stub(),
        stub_req = sinon.stub(),
        stub_res = sinon.stub();

      target.timeLog(stub_req, stub_res, stub_next);

      stub_req.notCalled.should.be.true();
      stub_res.notCalled.should.be.true();
      stub_next.calledOnce.should.be.true();
    });
  });
});

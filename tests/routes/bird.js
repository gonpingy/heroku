const target = require('../../routes/bird');
const should = require('should');
const sinon = require('sinon');

describe('bird', () => {
  describe('root', () => {
    it('正常レスポンス', () => {
      const stubReq = sinon.stub();
      const stubRes = {
        send: sinon.stub(),
      };

      target.root(stubReq, stubRes);

      stubReq.notCalled.should.be.true();
      stubRes.send.withArgs('Birds home page').calledOnce.should.be.true();
    });
  });

  describe('about', () => {
    it('正常レスポンス', () => {
      const stubReq = sinon.stub();
      const stubRes = {
        send: sinon.stub(),
      };

      target.about(stubReq, stubRes);

      stubReq.notCalled.should.be.true();
      stubRes.send.withArgs('About birds').calledOnce.should.be.true();
    });
  });

  describe('timeLog', () => {
    it('正常レスポンス', () => {
      const stubNext = sinon.stub();
      const stubReq = sinon.stub();
      const stubRes = sinon.stub();

      target.timeLog(stubReq, stubRes, stubNext);

      stubReq.notCalled.should.be.true();
      stubRes.notCalled.should.be.true();
      stubNext.calledOnce.should.be.true();
    });
  });
});

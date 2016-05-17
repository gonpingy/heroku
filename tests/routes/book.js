const target = require('../../routes/book');
const should = require('should');
const sinon = require('sinon');

describe('book', () => {
  describe('get', () => {
    it('正常レスポンス', () => {
      const stubReq = sinon.stub();
      const stubRes = {
        send: sinon.stub(),
      };

      target.get(stubReq, stubRes);
      stubReq.notCalled.should.be.true();

      stubRes.send.withArgs('Get a random book').calledOnce.should.be.true();
    });
  });

  describe('post', () => {
    it('正常レスポンス', () => {
      const stubReq = sinon.stub();
      const stubRes = {
        send: sinon.stub(),
      };

      target.post(stubReq, stubRes);
      stubReq.notCalled.should.be.true();

      stubRes.send.withArgs('Add a book').calledOnce.should.be.true();
    });
  });

  describe('put', () => {
    it('正常レスポンス', () => {
      const stubReq = sinon.stub();
      const stubRes = {
        send: sinon.stub(),
      };

      target.put(stubReq, stubRes);
      stubReq.notCalled.should.be.true();

      stubRes.send.withArgs('Update the book').calledOnce.should.be.true();
    });
  });
});

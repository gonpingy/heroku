const target = require('../index');
const request = require('supertest');
const should = require('should');

describe('index', () => {
  it('/', (done) => {
    request(target)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        res.status.should.be.equal(200);

        return done();
      });
  });

  it('/example/d', (done) => {
    request(target)
      .get('/example/d')
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        res.text.should.be.equal('Hello from D!');

        return done();
      });
  });
});

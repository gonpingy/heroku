'use strict';
var
  target = require('../index'),
  request = require('supertest'),
  should = require('should'),
  sinon = require('sinon');

describe('index', function () {
  it('/', function (done) {
    request(target)
      .get('/')
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err);
        } else {
          res.status.should.be.equal(200);

          return done();
        }
      });
  });

  it('/example/d', function (done) {
    request(target)
      .get('/example/d')
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err);
        } else {
          res.text.should.be.equal('Hello from D!');

          return done();
        }
      });
  });
});

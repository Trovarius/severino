//https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha
var assert = require('assert')
var expect = require('chai').expect;
var request = require('request')

describe('Events', function() {
  describe('Get events', function() {
    var url  = "http://localost:3000/event"

    it('returns status 200', function(done) {
      request(url, function(err, res, body){
        expect(res.statusCode).to.equal(200);
        done();
      });
    });

    it('return events', function(done){
      request(url, function(err, res, body){
        expect(body).to.equal([]);
        done();
      });
    });
  });
});

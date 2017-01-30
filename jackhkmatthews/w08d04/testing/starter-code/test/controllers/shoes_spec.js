require('../spec_helper');
const Shoe = require('../../models/shoe');

describe('Shoes Controller Test', () => {

  beforeEach(done => {
    Shoe.collection.drop();
    done();
  });

  describe('GET /shoes', () => {

    beforeEach(done => {
      Shoe.create({
        'name': 'Nike',
        'brand': 'black',
        'material': 'Waste plastic',
        'size': 11
      });
      done();
    });

    it('should return a 200 response', done => {
      api
        .get('/api/shoes')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.status).to.eq(200);
          expect(res.headers['content-type']).to.eq('application/json; charset=utf-8');
          done();
        });
    });
    it('should return an array', done => {
      api
        .get('/api/shoes')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          done();
        });
    });
    it('should return shoe object', done => {
      api
        .get('/api/shoes')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body)
            .to.have.property(0)
            .and.have.all.keys([
              'name',
              'brand',
              'material',
              'size',
              '_id',
              'updatedAt',
              'createdAt',
              '__v'
            ]);
          done();
        });
    });

  });

});

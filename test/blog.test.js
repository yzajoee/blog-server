const supertest = require('supertest')
const koa = require('koa')

const app = require('../app')
const request = supertest(app)

describe('POST /api/blog/save', function () {
  it('respond with json', function (done) {
    request
      .post('/api/blog/save')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        if(err) return done(err)
        done()
      })
  })
})
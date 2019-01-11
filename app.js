const Koa = require('koa');
const app = new Koa();

module.exports = function () {
  app.use(require('./src/routes').routes())
}
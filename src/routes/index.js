const Router = require('koa-router')
const router = new Router()
const blog = require('../controllers/blog')

router.post('/api/blog/save', blog.save)

module.exports = router
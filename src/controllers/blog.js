const Msg = require('../util/msg')

exports.save = async ctx => {
  ctx.body = Msg.s('请求成功')
}
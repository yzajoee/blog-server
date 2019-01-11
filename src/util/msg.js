/**
 *接口快速返回
 * @param {*} data 返回的数据
 * @param {String} msg 相关的提示信息
 * @param {String} code 错误码
 * @param {Boolean} success 成功或者失败
 */
const Msg = function (data, msg, code, success) {
  return {data, message: msg, code, success}
}

/**
 * 快速成功返回
 * @param {*} data 返回的数据，可以为空
 * @param {String} msg 接口请求成功返回消息
 */
Msg.s = (data = {}, msg) => {
  let _m,
    _data
  if (typeof argument[0] === 'string') {
    _m = argument[0]
    _data = null
  }
  return Msg(data || _data, msg || _m, '0000', true)
}
/**
 * 快速失败返回
 * @param {string} msg 错误信息
 * @param {String} code 错误代码
 */
Msg.f = (msg, code = '9999') => {
  return Msg(null, msg, code, false)
}

module.exports = Msg
module.exports = (plop) => {
  plop.setWelcomeMessage('请选择需要创建的类型：')
  plop.setGenerator('views', require('./plop-templates/views/prompt'))
  plop.setGenerator('component', require('./plop-templates/component/prompt'))
  plop.setGenerator('store', require('./plop-templates/store/prompt'))
}

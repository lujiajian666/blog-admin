var path = require('path')
function resolve (dir) {
  console.log(__dirname)
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@pic', resolve('./src/assets/pic'))
      .set('@service', resolve('./src/service'))
      .set('@page', resolve('./src/page'))
      .set('@components', resolve('./src/components'))
      .set('@assets', resolve('./src/assets'))
  }
}
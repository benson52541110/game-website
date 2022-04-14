module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/game-website/'
    : '/',
  transpileDependencies: true,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== 'development') {
      config.performance = {
        hints: 'warning',
        maxEntrypointSize: 50000000,
        maxAssetSize: 30000000,
        assetFilter: function (assetFilename) {
          return assetFilename.endsWith('.js')
        }
      }
    }
  }
}

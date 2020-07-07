module.exports = {
  css: {
    sourceMap: true
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-svg-inline-loader')
      .loader('vue-svg-inline-loader')
      .options({ /* ... */ })
  },
  pluginOptions: {
    lintStyleOnBuild: true,
    stylelint: {},
    i18n: {
      locale: 'es',
      fallbackLocale: 'es',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}

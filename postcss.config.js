module.exports = {
  plugins: {
    'postcss-calc': {},
    'postcss-prepend-imports': {
      path: 'src/styles',
      files: ['_variables.css', '_mediaqueries.css', '_mixins.css']
    },
    'postcss-import': {},
    'postcss-mixins': {
      mixinsDir: 'src/styles',
      mixinsFiles: ['_mixins.css']
    },
    'postcss-color-mod-function': {},
    'postcss-preset-env': {
      stage: 0
    },
    autoprefixer: {}
  }
}

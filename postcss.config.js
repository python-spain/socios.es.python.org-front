module.exports = {
  plugins: {
    'postcss-calc': {},
    'postcss-color-mod-function': {},
    'postcss-import': {},
    'postcss-mixins': {
      mixinsDir: 'src/styles',
      mixinsFiles: ['_mixins.css']
    },
    'postcss-prepend-imports': {
      path: 'src/styles',
      files: ['_variables.css', '_mediaqueries.css']
    },
    'postcss-preset-env': {
      stage: 0
    },
    autoprefixer: {}
  }
}

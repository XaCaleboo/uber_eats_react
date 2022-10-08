const postcssNesting = require('postcss-nesting')

module.exports = {
    parser: 'sugarss',
    map: false,
    plugins: {
      'postcss-plugin': {
        postcssNesting
      }
    }
  }
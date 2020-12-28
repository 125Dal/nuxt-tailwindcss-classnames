'use strict'

import { resolve } from 'path'

const pluginModule = function (_moduleOptions) {
  this.addPlugin({
    src: resolve(__dirname, 'plugin.ts'),
    fileName: 'nuxt-tailwindcss-classnames/plugin.ts'
  })
}

module.exports = pluginModule
module.exports.meta = require('../package.json')

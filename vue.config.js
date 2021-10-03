/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
const path = require('path')
module.exports = {
  // options...
	configureWebpack: {
		resolve: {
			alias: {
				'Assets': path.resolve(__dirname, 'src/assets')
			}
		}
	},
	devServer: {
		// https: true
	}
}
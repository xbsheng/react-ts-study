const path = require('path')
const CracoAntDesignPlugin = require('craco-antd')
const CracoLessPlugin = require('craco-less')

const pathResolve = pathUrl => path.resolve(__dirname, pathUrl)

module.exports = {
  webpack: {
    alias: {
      '@': pathResolve('./src')
    }
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#1DA57A',
        },
      },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        modifyLessRule: function (lessRule, _context) {
          lessRule.test = /\.(module)\.(less)$/;
          lessRule.exclude = /node_modules/;
          return lessRule;
        },
        cssLoaderOptions: {
          modules: {
            localIdentName: '[name]__[local]--[hash:base64:5]',
          }
        },
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        }
      },
    },
  ]
}
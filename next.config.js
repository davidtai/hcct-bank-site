const withSass = require('@zeit/next-sass')
const withTM = require('next-transpile-modules')(['midstream', 'shop.js', 'rc-countdown-flip', '@hanzo/middleware', '@hanzo/react'])

module.exports = withSass(withTM({
  cssModules: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|webp|txt|jpg|png|jpeg|svg|gif|mp4|webm)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            context: '',
            outputPath: 'static',
            publicPath: '/_next/static',
            name: '[path][name].[hash].[ext]',
          },
        },
      ],
    })

    return config
  },
}))

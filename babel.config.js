module.exports = (api) => {
  api.cache(true)

  return {
    presets: [
      'next/babel',
    ],
    plugins: [
      ['@babel/plugin-proposal-decorators', {
        legacy: true,
      }],
      ['@babel/plugin-proposal-class-properties', {
        loose: true,
      }],
      ['@babel/plugin-proposal-object-rest-spread', {
        loose: true,
      }],
      ['styled-components', {
        ssr: false,
        displayName: true,
        preprocess: false,
      }],
      ['inline-import', {
        extensions: ['.css'],
      }],
    ],
  }
}

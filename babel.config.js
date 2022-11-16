module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './assets',
            screens: './screens',
            libs: './libs',
            components: './components',
            fixtures: './fixtures',
            interfaces: './interfaces',
            utils: './utils',
          },
        },
      ],
    ],
  };
};

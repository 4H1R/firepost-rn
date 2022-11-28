module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv'],
      ['react-native-reanimated/plugin'],
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
            types: './types',
            utils: './utils',
            services: './services',
            shared: './shared',
            stores: './stores',
            hooks: './hooks',
          },
        },
      ],
    ],
  };
};

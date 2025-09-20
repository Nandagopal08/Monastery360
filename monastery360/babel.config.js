module.exports = function (api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: [
        [
          'module-resolver',
          {
            root: ['./'],
            alias: {
              '@': './',  // now you can do import Something from "@/components/..."
              '@components': './components',
              '@screens': './app',
            },
          },
        ],
        'react-native-reanimated/plugin', // required for Reanimated
      ],
    };
  };
  
const { override, addWebpackPlugin } = require('customize-cra');
const { InjectManifest } = require('workbox-webpack-plugin');
const WebpackLighthousePlugin = require('webpack-lighthouse-plugin');

module.exports = (webpack, ...args) => {
  // remove GenerateSW plugin
  webpack.plugins.pop();
  const overridenConf = override(
    addWebpackPlugin(
      new InjectManifest({
        swSrc: './src/service-worker.js',
        globDirectory: webpack.output.path,
        globPatterns: ['*.{png,ico}'],
      }),
    ),
    process.env.LIGHTHOUSE_AUDIT === 'true' ? addWebpackPlugin(
      new WebpackLighthousePlugin({
       url: 'http://localhost:5000'
      }),
    ) : null,
  )(webpack, ...args);
  return overridenConf;
};

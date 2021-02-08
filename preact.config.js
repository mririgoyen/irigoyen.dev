import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
  webpack(config, env, helpers) {
    const cssClassIdentName = process.env.NODE_ENV === 'development' ? '[path][name]__[local]' : '[hash:base64:5]';

    // Override CSS modules class names
    config.module.rules[4].use[1].options.modules.localIdentName = cssClassIdentName;

    // Copy assets to the root
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [{
          context: path.resolve(__dirname, 'src/assets'),
          from: '*'
        }]
      })
    );

    // Assign variables for use in client code
    const { plugin } = helpers.getPluginsByName(config, 'DefinePlugin')[0];
    Object.assign(plugin.definitions, { 'process.env.GITHUB_RUN_ID': process.env.GITHUB_RUN_ID || '"dev"' });
  }
};

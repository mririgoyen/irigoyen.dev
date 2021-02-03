import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
  webpack(config, env, helpers) {
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [{
          context: path.resolve(__dirname, 'src/assets'),
          from: '*'
        }]
      })
    );

    // GitHub Pages deployment configuration
    const publicPath = process.env.GITHUB_PAGES ? `/${process.env.GITHUB_PAGES}/` : '/';
    const ghEnv = process.env.GITHUB_PAGES && JSON.stringify(`${process.env.GITHUB_PAGES}`);

    config.output.publicPath = publicPath;
    const { plugin } = helpers.getPluginsByName(config, 'DefinePlugin')[0];

    Object.assign(plugin.definitions, { 'process.env.GITHUB_PAGES': ghEnv });
  }
};

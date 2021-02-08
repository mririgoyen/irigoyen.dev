import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import { version } from './package.json';

export default (config, eng, helpers) => {
  // Override CSS modules class names
  const cssClassIdentName = process.env.NODE_ENV === 'development' ? '[path][name]__[local]' : '[hash:base64:5]';
  config.module.rules[4].use[1].options.modules.localIdentName = cssClassIdentName;

  // Inject the GitHub build ID
  const { plugin: HtmlWebpackPlugin } = helpers.getPluginsByName(config, 'HtmlWebpackPlugin')[0] || {};
  if (HtmlWebpackPlugin) {
    const [ major, minor ] = version.split('.');
    HtmlWebpackPlugin.options.meta.version = process.env.GITHUB_RUN_ID ? `${major}.${minor}.${process.env.GITHUB_RUN_ID}` : 'dev';
  }

  // Copy assets to the root
  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [{
        context: path.resolve(__dirname, 'src/assets'),
        from: '*'
      }]
    })
  );
};

import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default (config, eng, helpers) => {
  // Override CSS modules class names
  const cssClassIdentName = process.env.BUILD_ID ? '[hash:base64:5]' : '[path][name]__[local]';
  config.module.rules[4].use[1].options.modules.localIdentName = cssClassIdentName;

  // Inject the GitHub build ID
  const { plugin: HtmlWebpackPlugin } = helpers.getPluginsByName(config, 'HtmlWebpackPlugin')[0] || {};
  if (HtmlWebpackPlugin) {
    HtmlWebpackPlugin.options.meta.version = process.env.BUILD_ID || 'dev';
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

import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import markdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItLinks from 'markdown-it-link-attributes';
import markdownItPrism from 'markdown-it-prism';

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
      patterns: [
        {
          context: path.resolve(__dirname, 'src/assets'),
          from: '*'
        }
      ]
    })
  );

  // Move Markdown files to be handled by the loader
  config.module.rules[6].test = /\.(xml|html|txt)$/,
  config.module.rules.push({
    loader: 'frontmatter-markdown-loader',
    options: {
      markdownIt: markdownIt({ html: true })
        .use(markdownItAnchor)
        .use(markdownItPrism)
        .use(markdownItLinks, {
          attrs: {
            rel: 'noopener nofollow',
            target: '_blank'
          },
          pattern: /^(?!https?:\/\/(www.)?irigoyen.dev*$)(?!#)(?!\/).*/

        }),
      mode: [ 'body', 'html' ]
    },
    test: /\.md$/
  });
};

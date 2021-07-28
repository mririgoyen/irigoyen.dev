import path from 'path';
import webpack from 'webpack';
import RobotstxtPlugin from 'robotstxt-webpack-plugin';

import { baseUrl } from './build/defaults';

export default (config) => {
  // Set global variables
  config.plugins.push(
    new webpack.DefinePlugin({
      config: {
        baseUrl: JSON.stringify(baseUrl)
      }
    })
  );

  // Override CSS modules class names
  const cssClassIdentName = process.env.BUILD_ID ? '[hash:base64:5]' : '[path][name]__[local]';
  config.module.rules[4].use[1].options.modules.localIdentName = cssClassIdentName;

  // Handle loading SVGs as elements
  config.module.rules[7].test = /\.(woff2?|ttf|eot|jpe?g|png|webp|gif|mp4|mov|ogg|webm)(\?.*)?$/i;
  config.module.rules.push({
    exclude: /node_modules/,
    loader: 'react-svg-loader',
    options: {
      svgo: {
        plugins: [
          { collapseGroups: false }
        ]
      }
    },
    test: /\.svg$/
  });

  // Add an alias to the assets directory
  config.resolve.alias.assets = path.resolve(__dirname, './src/assets/');

  // Robots.txt Generation
  config.plugins.push(
    new RobotstxtPlugin({
      filePath: 'robots.txt',
      host: baseUrl,
      policy: [{
        disallow: '',
        userAgent: '*'
      }],
      sitemap: `${baseUrl}sitemap-index.xml`
    })
  );
};

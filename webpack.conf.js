var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    bail: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: /(assets\/js|assets\\js|node_modules\/@bigcommerce\/stencil-utils|node_modules\\@bigcommerce\\stencil-utils)/,
                query: {
                    compact: false,
                    cacheDirectory: true,
                    presets: ['es2015-loose'],
                }
            },
            {
                test: /\.js$/,
                loader: 'script',
                include: /assets\/vendor/,
                exclude: /assets\/vendor\/lightbox2|assets\/vendor\/parallax/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                include: /assets\/vendor/
            },
            
            {
                test: /(\.png|\.gif)$/,
                loader: 'url-loader',
                include: /assets\/vendor/
            },
            {
  // Preprocess our own .css files
  // This is the place to add your own loaders (e.g. sass/less etc.)
  // for a list of loaders, see https://webpack.js.org/loaders/#styling
  test: /\.css$/,
                loader: 'style-loader!css-loader',
  exclude: /node_modules/,
  use: ['style-loader', 'css-loader'],
},
{
  // Preprocess 3rd party .css files located in node_modules
  test: /\.css$/,
    loader: 'style-loader!css-loader',
  include: /node_modules/,
  use: ['style-loader', 'css-loader'],
},
    
                {
  // Preprocess our own .css files
  // This is the place to add your own loaders (e.g. sass/less etc.)
  // for a list of loaders, see https://webpack.js.org/loaders/#styling
  test: /(\.png|\.gif)$/,
  loader: 'url-loader',
  exclude: /node_modules/,
  use: ['style-loader', 'css-loader'],
},
{
  // Preprocess 3rd party .css files located in node_modules
  test: /(\.png|\.gif)$/,
    loader: 'url-loader',
  include: /node_modules/,
  use: ['style-loader', 'css-loader'],
}        
            
            
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    watch: false
};


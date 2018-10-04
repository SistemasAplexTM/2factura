const mix = require('laravel-mix');

mix.webpackConfig({
  module: {
            rules: [
                {
                    test: /\.css$/,
                    loaders: ['style-loader', 'css-loader']
                }
            ]
        },
  resolve: {
    alias: {
      "@" : path.resolve(__dirname, 'resources/js')
    }
  }
})

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

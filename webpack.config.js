module.exports = {
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    context: __dirname,
    entry: {
      app: ['./src/index.js']
    },
    output: {
      path: './build',
      filename: 'webmap-bundle.js',
      publicPath: '/build/'
    },
    devServer: {
      host: '127.0.0.1',
      port: 8080,
      inline: true
    },
    module: {
      loaders: [
        {
          test: /(\.js|.jsx)$/,
          loader: 'babel',
          query: {
            presets: ['es2015']
          }
        }
      ]
    }
  }
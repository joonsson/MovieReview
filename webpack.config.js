module.exports = {
    devtool: 'source-map',
    entry: './src/script/code.ts',
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [
        // all files with a `.ts` extension will be handled by `ts-loader`
        { test: /\.ts$/, loader: 'ts-loader' }
      ]
    },
    output: {
      filename: 'distribution/bundle.js'
    }
  };
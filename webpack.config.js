const path = require('path');

module.exports = ({ mode }) => ({
  mode,
  entry: './src/ive.js',
  output: {
    filename: 'ive.js',
    path: path.resolve(__dirname, 'dist/scripts'),
  },
});

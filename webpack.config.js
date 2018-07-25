const path = require('path');

module.exports = {
    entry: './src/ive.js',
    output: {
        filename: 'ive.js',
        path: path.resolve(__dirname, 'dist/scripts')
    }
};

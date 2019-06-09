
const withLess = require('@zeit/next-less');
module.exports = withLess({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[name]__[local]___[hash:base64:5]",
    }
});

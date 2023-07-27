const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        ['/images','/api'],
        createProxyMiddleware({
            target: 'http://3.72.53.53:8000',
            changeOrigin: true,
        })
    );
};

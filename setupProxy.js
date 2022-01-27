import { createProxyMiddleware } from 'http-proxy-middleware'

export default app => {
    app.use(
        createProxyMiddleware('/api/v4/instrument?symbol=BTCUSD',
        {
            target: 'https://trade-am.osl.com',
            changeOrigin: true

        })
    )
    app.use(
        createProxyMiddleware('/api/v4/order',
        {
            target: 'https://trade-am.osl.com',
            changeOrigin: true

        })
    )
    
}
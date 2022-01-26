import { createProxyMiddleware } from 'http-proxy-middleware'

export const API_URL = 'https://trade-am.osl.com'

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
    app.use(cors({
        origin: "https://theblackmonk.tech",
        credentials: true
    }));
    
}

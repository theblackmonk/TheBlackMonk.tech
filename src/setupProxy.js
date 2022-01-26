import { createProxyMiddleware } from 'http-proxy-middleware'

export const API_URL = 'https://trade-am.osl.com'

export default app => {
    
    app.use(cors({
        origin: "https://theblackmonk.tech",
        credentials: true
    }));
    
}

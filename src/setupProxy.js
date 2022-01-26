const { creatProxyMiddleware } = require("http-proxy-middleware")

export default app => {
    
    app.use(cors({
        origin: "https://theblackmonk.tech",
        credentials: true
    }));
    
}

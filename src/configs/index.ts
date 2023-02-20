export default () => ({
    system: {
        domain: process.env.DOMAIN || "localhost:3000"
    },
    mongodb: {
        uri: process.env.MONGO_URI
    },
    jwt: {
        accessTokenPrivateKey: process.env.JWT_ACCESS_SECRET,
        refreshTokenPrivateKey: process.env.JWT_REFRESH_SECRET,
        expiresTime: {
            access: process.env.ACCESS_TOKEN_EXPIRES_TIME || "30m",
            refresh: process.env.REFRESH_TOKEN_EXPIRES_TIME || "7d",
            changePassword: process.env.CHANGE_PASSWORD_TOKEN_EXPIRES_TIME || "10m"
        }
    },
    // google: {
    //     clientID: process.env.GG_CLIENT_ID,
    //     clientSecret: process.env.GG_CLIENT_SECRET,
    //     redirectUri: process.env.GG_REDIRECT_URI,
    //     scope: process.env.GG_SCOPE
    // }
});
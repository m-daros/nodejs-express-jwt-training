module.exports = {

    remoteServerHost: process.env.REMOTE_HOST,
    remoteServerport: process.env.REMOTE_PORT,

    serverHost: process.env.HOST,
    serverPort: process.env.PORT,

    jwtIssuer: process.env.ISSUER,
    encryptionAlgorithm: "HS256",
    jwtSecret: "my-secret",
    jwtValiditySec: 15 * 60 // 15 minutes
}
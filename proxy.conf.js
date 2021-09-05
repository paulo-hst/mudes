const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: 'http://200.152.101.74:8686/',
        secure: false, // https
        logLevel: 'debug',
    }
]

module.exports = PROXY_CONFIG
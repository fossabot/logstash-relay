module.exports = {
  server: {
    port: 8080,
    shutdownTime: 1000,
    namespace: '/',
    timeout: 5,
    sslEnabled: true,
    sslPort: 8443,
    sslKey: `${__dirname}/ssl/localhost.key`,
    sslCert: `${__dirname}/ssl/localhost.pem`
  },
  logging: {
    // Logging Configuration
    logDir: './logs',
    options: { json: false, maxsize: '10000000', maxFiles: '10', level: 'silly' }
  },
  statsd: { host: '127.0.0.1', port: 8125, name: 'Test', attachHostName: false, telegraf: false },
  logstash: { host: 'logstash.dealerslink.io', port: 5001, appName: 'websiteApi-local' },
};

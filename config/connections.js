module.exports.connections = {
  // ...
  postgresdb: {
    /**
     * This 'connection' object could also be a connection string
     * e.g. 'postgresql://user:password@localhost:5432/databaseName?ssl=false'
     */
    connection: {
      database: 'parkr_dev',
      host: '127.0.0.1',
      user: 'postgres',
      password: null,
      port: 5432,
      ssl: false
    },
    /**
     * Pool configuration
     */
    pool: {
      min: 2,
      max: 20
    }
  }
}

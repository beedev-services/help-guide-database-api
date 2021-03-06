require('dotenv').config();

const pgConnection = process.env.DATABASE_URL || 'postgresql://postgres@localhost/auth';

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/tips.db3'
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA forgeign_keys = ON", done);
      },
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },

};

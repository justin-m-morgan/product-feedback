const baseConfig = {
  type: 'postgres',
  entities: ['dist/**/*.entity.js'],
  synchronize: false,
  migrations: ['dist/database/migrations/*.js'],
  cli: {
    migrationsDir: 'dist/database/migrations',
  },
};

if (process.env.NODE_ENV === 'production') {
  module.exports = {
    ...baseConfig,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 5432,
    database: process.env.DB_DATABASE,
    ssl:
      process.env.NODE_ENV === 'production'
        ? { rejectUnauthorized: false }
        : false,
  };
} else {
  module.exports = {
    ...baseConfig,
    database: 'productfeedback',
    host: 'localhost',
    port: 5432,
    username: 'justinmorgan',
    password: '',
  };
}

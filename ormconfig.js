const baseConfig = {
  type: 'postgres',
  entities: ['dist/src/**/*.entity.js'],
  synchronize: false,
  migrations: ['dist/src/database/migrations/*.js'],
  cli: {
    migrationsDir: 'src/database/migrations',
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

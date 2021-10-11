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
    url: process.env.DATABASE_URL,
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

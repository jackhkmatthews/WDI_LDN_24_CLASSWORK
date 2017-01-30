module.exports = {
  db: {
    test: 'mongodb://localhost/shoes-test',
    development: 'mongodb://localhost/shoes-development',
    production: process.env.MONGODB_URI
  }
};

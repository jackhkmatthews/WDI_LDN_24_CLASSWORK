module.exports = {
  port: process.env.PORT || 3000,
  db: 'mongodb://localhost/express-authentication',
  secret: process.env.SECRET || 'wow this is secret.  I love Shoreditch house.'
};

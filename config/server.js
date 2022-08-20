module.exports = ({ env }) => ({
  // url: "www.example.com",
  // proxy: true,
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});

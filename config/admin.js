module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4fffdc0299573831c84f7aa89a5bba87'),
  },
});

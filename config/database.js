module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env(
          "DATABASE_HOST",
          "ec2-54-228-250-82.eu-west-1.compute.amazonaws.com"
        ),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "d42uu2u7tuei5l"),
        username: env("DATABASE_USERNAME", "vgrwdoputzxgqm"),
        password: env(
          "DATABASE_PASSWORD",
          "010098fab563b4fa3ba6d9abfeddbcf76b7a8aa4810a6ba23b7cb29b1a4490ff"
        ),
        schema: "public",
      },
      options: {},
    },
  },
});

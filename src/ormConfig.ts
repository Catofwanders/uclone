import { ConnectionOptions } from "typeorm";

const defaultConnectionOptions: ConnectionOptions = {
  type: "postgres",
  database: "uclone",
  synchronize: true,
  logging: true,
  entities: ["entities/**/*.*"],
  port: 5432,
  host: process.env.APP_DB_ENDPOINT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
};

export default defaultConnectionOptions;

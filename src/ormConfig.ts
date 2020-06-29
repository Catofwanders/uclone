import { ConnectionOptions } from "typeorm";

const defaultConnectionOptions: ConnectionOptions = {
  type: "postgres",
  database: "uclone",
  synchronize: true,
  logging: true,
  entities: ["entities/**/*.*"],
  port: 5432,
  host: process.env.DB_ENDPOINT || "localhost",
  username: process.env.DB_USERNAME || "ucloneDbUser",
  password: process.env.DB_PASSWORD || " ",
};

export default defaultConnectionOptions;

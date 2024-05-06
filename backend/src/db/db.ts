import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DATABASE = process.env.DATABASE;

(async () => {
  try {
    const db = await connect(DATABASE!);
    console.log("DB connected to", db.connection.db.databaseName);
  } catch (error) {
    console.log("---database connection error---");
    console.log(error);
  }
})();

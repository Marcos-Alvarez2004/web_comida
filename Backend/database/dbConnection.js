import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "RESTAURANT",
    })
    .then(() => {
      console.log("Connection to the Database is successful");
    })
    .catch((err) => {
      console.log(`Connection to the Database is unsuccessful ${err}`);
    });
};

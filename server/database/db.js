import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://201370197:${password}@cluster0.v6mz5fl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

export default Connection;

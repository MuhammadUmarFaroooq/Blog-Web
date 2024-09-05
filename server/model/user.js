import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  Email: {
    type: String,
  },
});

const user = mongoose.model("user", userSchema);

export default user;

import mongoose from "mongoose";

const TokenSchema = mongoose.Schema({
  token: {
    type: String,
  },
});

const token = mongoose.model("token", TokenSchema);

export default token;

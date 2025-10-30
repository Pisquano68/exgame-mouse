import mongoose from "mongoose";
import { config } from "../config/config";

mongoose.connect(config.DB_URL);

interface ICat {
  name: string;
  age: number;
}

const catSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const catModel = mongoose.model("cat", catSchema);


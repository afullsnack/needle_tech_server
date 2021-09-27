import mongoose from "mongoose";
import { connectDB } from "../lib/db";
let EvacInventory;
try {
  connectDB();
  const EvacInventorySchema = new mongoose.Schema({
    date_entered: { type: Date, default: Date.now() },
    needletechstaff_name: String,
    needletechstaff_contact: String,
    state: String,
    lga: String,
    type_of_input: { type: [String] },
    input_unit: String,
    number_of_input_recieved: String,
  });
  EvacInventory =
    mongoose.models.EvacInventory ||
    mongoose.model("EvacInventory", EvacInventorySchema);
} catch (err) {
  console.log(err.message || err.toString(), "schema error");
}

export default EvacInventory;

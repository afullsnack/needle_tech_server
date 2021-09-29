import mongoose from "mongoose";
import { connectDB } from "../lib/db";
let Inventory;
try {
  connectDB();
  const InventorySchema = new mongoose.Schema({
    date_entered: { type: Date, default: Date.now() },
    enumerator_name: String,
    enumerator_contact: String,
    state: String,
    lga: String,
    town: String,
    input_type_distributed: String,
    input_quantity_delivered: String,
    fertilizer_quantity: String,
    fertilizer_type: String,
    warehosue_location: String,
    warehouse_manager_name: String,
    warehouse_manager_contact: String,
    name_of_bank_rep: String,
    contact_of_bank_rep: String,
    name_of_driver: String,
    vehicle_registration: String,
    warehouse_custody: String,
    date_of_delivery: String,
    any_other_info: String,
    distribution_image: String,
    verified: { type: Boolean, default: false },
  });
  Inventory =
    mongoose.models.Inventory || mongoose.model("Inventory", InventorySchema);
} catch (err) {
  console.log(err.message || err.toString(), "schema error");
}

export default Inventory;

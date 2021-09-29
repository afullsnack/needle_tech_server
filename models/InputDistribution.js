import mongoose from "mongoose";
import { connectDB } from "../lib/db";
let InputDistribution;
try {
  connectDB();
  const InputDistSchema = new mongoose.Schema({
    date_entered: { type: Date, default: Date.now() },
    enumerator_name: String,
    enumerator_Contact: String,
    state: String,
    lga: String,
    town: String,
    input_type_distributed: String,
    input_quantity_distributed: String,
    fertilizer_type: String,
    fertilizer_quantity: String,
    warehouse_location: String,
    warehouse_manager_name: String,
    warehouse_manager_contact: String,
    input_given_to: String,
    input_given_to_other_specify: String,
    input_given_to_cluster_head_name: String,
    input_given_to_cluster_contact: String,
    input_given_to_mech_company_name: String,
    input_given_to_mech_company_representative_name: String,
    input_given_to_mech_company_representative_contact: String,
    bank_representative_name: String,
    bank_representative_contact: String,
    distribution_date: String,
    any_other_info: String,
    distribution_image: String,
    verified: { type: Boolean, default: false },
  });
  InputDistribution =
    mongoose.models.InputDistribution ||
    mongoose.model("InputDistribution", InputDistSchema);
} catch (err) {
  console.log(err.message || err.toString(), "schema error");
}

export default InputDistribution;

import mongoose from "mongoose";
import { connectDB } from "../lib/db";
let FarmMonitor;
try {
  connectDB();
  const FarmMonitorSchema = new mongoose.Schema({
    date_entered: { type: Date, default: Date.now() },
    enumerator_name: String,
    enumerator_contact: String,
    state: String,
    lga: String,
    town: String,
    pre_planting_activities: { type: [String] },
    planting_activities: { type: [String] },
    is_seed_planted: String,
    planting_date: String,
    size_of_land: String,
    type_of_seed: String,
    quantity_of_seed: String,
    seed_image: String,
    measured_plant_space: String,
    spacing_image: String,
    chemical_type_applied: String,
    chemical_quantity_applied: String,
    mix_ratio: String,
    chemical_date_applied: String,
    activity_image: String,
    applied_list: { type: [String] },
    first_fertilizer_application: String,
    second_fertilizer_application: String,
    fertilizer_type_applied: String,
    fertilizer_date_applied: String,
    bags_applied: String,
    fertilizer_bags_image: String,
    fertilizer_other_type: String,
    cluster_head_name: String,
    cluster_head_contact: String,
    farm_infestations: { type: [String] },
    infestation_other_type: String,
    any_other_info: String,
    verified: { type: Boolean, default: false },
  });
  FarmMonitor =
    mongoose.models.FarmMonitor ||
    mongoose.model("FarmMonitor", FarmMonitorSchema);
} catch (err) {
  console.log(err.message || err.toString(), "schema error");
}

export default FarmMonitor;

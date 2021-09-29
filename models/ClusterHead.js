import mongoose from "mongoose";
import { connectDB } from "../lib/db";
let ClusterHead;
try {
  connectDB();
  const ClusterHeadSchema = new mongoose.Schema({
    date_entered: { type: Date, default: Date.now() },
    enumerator_name: String,
    enumerator_contact: String,
    state: String,
    lga: String,
    town: String,
    name_of_cluster_head: String,
    contact_of_cluster_head: String,
    cluster_head_image: String,
    name_of_cluster_area: String,
    number_of_farmer_in_cluster_group: String,
    size_of_cluster_farm_land: String,
    area_measure_doc: String,
    planted_farm_val: String,
    farm_img: String,
    lat: String,
    long: String,
    is_new_entry_or_redo: String,
    verified: { type: Boolean, default: false },
  });
  ClusterHead =
    mongoose.models.ClusterHead ||
    mongoose.model("ClusterHead", ClusterHeadSchema);
} catch (err) {
  console.log(err.message || err.toString(), "schema error");
}

export default ClusterHead;

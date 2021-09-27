import mongoose from "mongoose";
import { connectDB } from "../lib/db";
let IncidentReport;
try {
  connectDB();
  const IncidentReportSchema = new mongoose.Schema({
    date_entered: { type: Date, default: Date.now() },
    enumerator_name: String,
    enumerator_contact: String,
    state: String,
    lga: String,
    town: String,
    incident_type: { type: [String] },
    incident_date: String,
    incident_details: String,
    affected_location: String,
    affected_hecters: String,
    incident_image: String,
  });
  IncidentReport =
    mongoose.models.IncidentReport ||
    mongoose.model("IncidentReport", IncidentReportSchema);
} catch (err) {
  console.log(err.message || err.toString(), "schema error");
}

export default IncidentReport;

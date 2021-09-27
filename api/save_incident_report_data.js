import { connectDB } from "../lib/db";
import IncidentReport from "../models/IncidentReport";
connectDB();

// Example with Vercel
export default async (req, res) => {
  if (req.method !== "POST")
    return res.send({
      error: true,
      message: "Wrong HTTP method for the route",
    });

  try {
    // console.log(req.body);
    const {
      enumerator_name,
      enumerator_contact,
      state,
      lga,
      town,
      incident_type,
      incident_date,
      incident_details,
      affected_location,
      affected_hecters,
      incident_image,
    } = req.body;

    console.log(
      enumerator_name,
      enumerator_contact,
      state,
      lga,
      town,
      affected_hecters
    );

    let incidentReport = new IncidentReport({
      enumerator_name,
      enumerator_contact,
      state,
      lga,
      town,
      incident_type,
      incident_date,
      incident_details,
      affected_location,
      affected_hecters,
      incident_image,
    });
    await incidentReport.save();
    // client.close();
    // console.log("result from insert query", enumerator);
    res.send({
      error: false,
      status: "success",
      message: "data saved successfully",
      data: incidentReport,
    });
  } catch (error) {
    res.send({
      error: true,
      status: "failed",
      message: error.toString() || err.message,
      data: null,
    });
  }
};

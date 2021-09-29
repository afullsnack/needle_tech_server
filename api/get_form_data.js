import { connectDB } from "../../lib/db";
import ClusterHead from "../../models/ClusterHead";
import EvacInventory from "../../models/EvacInventory";
import FarmMonitor from "../../models/FarmMonitor";
import IncidentReport from "../../models/IncidentReport";
import InputDistribution from "../../models/InputDistribution";
import InputInventory from "../../models/InputInventory";
connectDB();

// Example with Vercel
export default async (req, res) => {
  if (req.method !== "GET")
    return res.send({
      error: true,
      message: "Wrong HTTP method for the route",
    });

  try {
    var { type } = req.params;

    switch (type) {
      case "cluster_head":
        ClusterHead.find({}, (err, found) => {
          // console.log(err, found);
          res.send({
            error: false,
            status: found ? "success" : "failed",
            message: found ? "Found user" : "Failed to find user",
            data: err || found,
          });
        });
        break;
      case "evac_inventory":
        EvacInventory.find({}, (err, found) => {
          // console.log(err, found);
          res.send({
            error: false,
            status: found ? "success" : "failed",
            message: found ? "Found user" : "Failed to find user",
            data: err || found,
          });
        });
        break;
      case "farm_monitor":
        FarmMonitor.find({}, (err, found) => {
          // console.log(err, found);
          res.send({
            error: false,
            status: found ? "success" : "failed",
            message: found ? "Found user" : "Failed to find user",
            data: err || found,
          });
        });
        break;
      case "incident_report":
        IncidentReport.find({}, (err, found) => {
          // console.log(err, found);
          res.send({
            error: false,
            status: found ? "success" : "failed",
            message: found ? "Found user" : "Failed to find user",
            data: err || found,
          });
        });
        break;
      case "input_distribution":
        InputDistribution.find({}, (err, found) => {
          // console.log(err, found);
          res.send({
            error: false,
            status: found ? "success" : "failed",
            message: found ? "Found user" : "Failed to find user",
            data: err || found,
          });
        });
        break;
      case "input_inventory":
        InputInventory.find({}, (err, found) => {
          // console.log(err, found);
          res.send({
            error: false,
            status: found ? "success" : "failed",
            message: found ? "Found user" : "Failed to find user",
            data: err || found,
          });
        });
        break;

      default:
        res.send({
          error: true,
          status: "failed",
          message: "No data was found for the parameters",
          data: null,
        });
        break;
    }
    // console.log("result from db", result);

    // res.end({
    //   error: true,
    //   status: "failed",
    //   message: "Restricted area, please login",
    //   data: null,
    // });
  } catch (err) {
    res.send({
      error: true,
      status: "failed",
      message: err.toString() || err.message,
      data: null,
    });
  }
};

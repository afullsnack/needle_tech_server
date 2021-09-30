import { connectDB } from "../lib/db";
import ClusterHead from "../models/ClusterHead";
import EvacInventory from "../models/EvacInventory";
import FarmMonitor from "../models/FarmMonitor";
import IncidentReport from "../models/IncidentReport";
import InputDistribution from "../models/InputDistribution";
import InputInventory from "../models/InputInventory";
connectDB();

// Example with Vercel
export default async (req, res) => {
  if (req.method !== "PUT")
    return res.send({
      error: true,
      message: "Wrong HTTP method for the route",
    });

  try {
    var { type, id } = req.query;

    switch (type) {
      case "cluster_head":
        ClusterHead.update(
          { _id: id },
          {
            $set: { verified: true },
          },
          (err, result) => {
            console.log(result);
            res.send({
              error: false,
              status: result ? "success" : "failed",
              message: found ? "Verified data" : "Failed to verify data",
              data: err || result,
            });
          }
        );
        break;
      case "evac_inventory":
        EvacInventory.update(
          { _id: id },
          { $set: { verified: true } },
          (err, result) => {
            console.log(err, result);
            res.send({
              error: false,
              status: result ? "success" : "failed",
              message: result ? "Verified data" : "Failed to verify data",
              data: err || result,
            });
          }
        );
        break;
      case "farm_monitor":
        FarmMonitor.update(
          { _id: id },
          { $set: { verified: true } },
          (err, result) => {
            console.log(err, result);
            res.send({
              error: false,
              status: result ? "success" : "failed",
              message: result ? "Verified data" : "Failed to verify data",
              data: err || result,
            });
          }
        );
        break;
      case "incident_report":
        IncidentReport.update(
          { _id: id },
          { $set: { verified: true } },
          (err, result) => {
            console.log(err, result);
            res.send({
              error: false,
              status: result ? "success" : "failed",
              message: result ? "Verified data" : "Failed to verify data",
              data: err || result,
            });
          }
        );
        break;
      case "input_distribution":
        InputDistribution.update(
          { _id: id },
          { $set: { verified: true } },
          (err, result) => {
            console.log(err, result);
            res.send({
              error: false,
              status: result ? "success" : "failed",
              message: result ? "Verified data" : "Failed to verify data",
              data: err || result,
            });
          }
        );
        break;
      case "input_inventory":
        InputInventory.update(
          { _id: id },
          { $set: { verified: true } },
          (err, result) => {
            console.log(err, result);
            res.send({
              error: false,
              status: result ? "success" : "failed",
              message: result ? "Verified data" : "Failed to verify data",
              data: err || result,
            });
          }
        );
        break;

      default:
        res.send({
          error: true,
          status: "failed",
          message: "Could not find data to verify",
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

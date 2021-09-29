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
    var statuses = {
      cluster_head: {
        verified: await ClusterHead.count({ verified: true }),
        unverified: await ClusterHead.count({ verified: false }),
      },
      evac_inventory: {
        verified: await EvacInventory.count({ verified: true }),
        unverified: await EvacInventory.count({ verified: false }),
      },
      farm_monitor: {
        verified: await FarmMonitor.count({ verified: true }),
        unverified: await FarmMonitor.count({ verified: false }),
      },
      incident_report: {
        verified: await IncidentReport.count({ verified: true }),
        unverified: await IncidentReport.count({ verified: false }),
      },
      input_distribution: {
        verified: await InputDistribution.count({ verified: true }),
        unverified: await InputDistribution.count({ verified: false }),
      },
      input_inventory: {
        verified: await InputInventory.count({ verified: true }),
        unverified: await InputInventory.count({ verified: false }),
      },
    };

    res.send({
      error: false,
      status: "success",
      message: "Status of forms returned",
      data: statuses,
    });
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

import mongoose from "mongoose";
import { connectDB } from "../lib/db";
let FarmMonitor;
try {
  connectDB();
  const FarmMonitorSchema = new mongoose.Schema({
    enumeratorName: String,
    enumeratorContact: String,
    state: String,
    lga: String,
    town: String,
    prePlantingActivities: { type: [String] },
    plantingActivities: { type: [String] },
    isSeedPlanted: String,
    plantingDate: String,
    typeOfSeed: String,
    quantityOfSeed: String,
    seedImage: String,
    measuredPlantSpace: String,
    spacingImage: String,
    chemicalTypeApplied: String,
    chemicalQuantityApplied: String,
    mixRatio: String,
    chemicalDateApplied: String,
    activityImage: String,
    appliedList: { type: [String] },
    firstFertilizerApplication: String,
    secondFertilizerApplication: String,
    fertilizerTypeApplied: String,
    fertilizerDateApplied: String,
    bagsApplied: String,
    fertilizerBagsImage: String,
    fertilizerOtherType: String,
    clusterHeadName: String,
    clusterHeadContact: String,
    farmInfestations: { type: [String] },
    infestationOtherType: String,
    anyOtherInfo: String,
  });
  FarmMonitor =
    mongoose.models.FarmMonitor ||
    mongoose.model("FarmMonitor", FarmMonitorSchema);
} catch (err) {
  console.log(err.message || err.toString(), "schema error");
}

export default FarmMonitor;

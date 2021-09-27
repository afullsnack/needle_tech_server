import mongoose from "mongoose";
import { connectDB } from "../lib/db";
let InputDistribution;
try {
  connectDB();
  const InputDistSchema = new mongoose.Schema({
    dateEntered: { type: Date, default: Date.now() },
    enumeratorName: String,
    enumeratorContact: String,
    state: String,
    lga: String,
    town: String,
    inputTypeDistributed: String,
    inputQuantityDistributed: String,
    fertilizerType: String,
    fertilizerQuantity: String,
    warehouseLocation: String,
    warehouseManagerName: String,
    warehouseManagerContact: String,
    inputGivenTo: String,
    inputGivenToOtherSpecify: String,
    inputGivenToClusterHeadName: String,
    inputGivenToClusterContact: String,
    inputGivenToMechCompanyName: String,
    inputGivenToMechCompanyRepresentativeName: String,
    inputGivenToMechCompanyRepresentativeContact: String,
    bankRepresentativeName: String,
    bankRepresentativeContact: String,
    distributionDate: String,
    anyOtherInfo: String,
    distributionImage: String,
  });
  InputDistribution =
    mongoose.models.InputDistribution ||
    mongoose.model("InputDistribution", InputDistSchema);
} catch (err) {
  console.log(err.message || err.toString(), "schema error");
}

export default InputDistribution;

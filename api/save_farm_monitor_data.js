import { connectDB } from "../lib/db";
import FarmMonitor from "../models/FarmMonitor";
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
      pre_planting_activities,
      planting_activities,
      is_seed_planted,
      planting_date,
      type_of_seed,
      quantity_of_seed,
      seed_image,
      measured_plant_space,
      spacing_image,
      chemical_type_applied,
      chemical_quantity_applied,
      mix_ratio,
      chemical_date_applied,
      activity_image,
      applied_list,
      first_fertilizer_application,
      second_fertilizer_application,
      fertilizer_type_applied,
      fertilizer_date_applied,
      bags_applied,
      fertilizer_bags_image,
      fertilizer_other_type,
      cluster_head_name,
      cluster_head_contact,
      farm_infestations,
      infestation_other_type,
      any_other_info,
    } = req.body;

    console.log(enumerator_name, enumerator_contact, state, lga, town);

    let farmMonitor = new FarmMonitor({
      enumeratorName: enumerator_name,
      enumeratorContact: enumerator_contact,
      state: state,
      lga: lga,
      town: town,
      prePlantingActivities: pre_planting_activities,
      plantingActivities: planting_activities,
      isSeedPlanted: is_seed_planted,
      plantingDate: planting_date,
      typeOfSeed: type_of_seed,
      quantityOfSeed: quantity_of_seed,
      seedImage: seed_image,
      measuredPlantSpace: measured_plant_space,
      spacingImage: spacing_image,
      chemicalTypeApplied: chemical_type_applied,
      chemicalQuantityApplied: chemical_quantity_applied,
      mixRatio: mix_ratio,
      chemicalDateApplied: chemical_date_applied,
      activityImage: activity_image,
      appliedList: applied_list,
      firstFertilizerApplication: first_fertilizer_application,
      secondFertilizerApplication: second_fertilizer_application,
      fertilizerTypeApplied: fertilizer_type_applied,
      fertilizerDateApplied: fertilizer_date_applied,
      bagsApplied: bags_applied,
      fertilizerBagsImage: fertilizer_bags_image,
      fertilizerOtherType: fertilizer_other_type,
      clusterHeadName: cluster_head_name,
      clusterHeadContact: cluster_head_contact,
      farmInfestations: farm_infestations,
      infestationOtherType: infestation_other_type,
      anyOtherInfo: any_other_info,
    });
    await farmMonitor.save();
    // client.close();
    // console.log("result from insert query", enumerator);
    res.send({
      error: false,
      status: "success",
      message: "data saved successfully",
      data: farmMonitor,
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

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
      size_of_land,
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
      enumerator_name: enumerator_name,
      enumerator_contact: enumerator_contact,
      state: state,
      lga: lga,
      town: town,
      pre_planting_activities: pre_planting_activities,
      planting_activities: planting_activities,
      is_seed_planted: is_seed_planted,
      planting_date: planting_date,
      size_of_land: size_of_land,
      type_of_seed: type_of_seed,
      quantity_of_seed: quantity_of_seed,
      seed_image: seed_image,
      measured_plant_space: measured_plant_space,
      spacing_image: spacing_image,
      chemical_type_applied: chemical_type_applied,
      chemical_quantity_applied: chemical_quantity_applied,
      mix_ratio: mix_ratio,
      chemical_date_applied: chemical_date_applied,
      activity_image: activity_image,
      applied_list: applied_list,
      first_fertilizer_application: first_fertilizer_application,
      second_fertilizer_application: second_fertilizer_application,
      fertilizer_type_applied: fertilizer_type_applied,
      fertilizer_date_applied: fertilizer_date_applied,
      bags_applied: bags_applied,
      fertilizer_bags_image: fertilizer_bags_image,
      fertilizer_other_type: fertilizer_other_type,
      cluster_head_name: cluster_head_name,
      cluster_head_contact: cluster_head_contact,
      farm_infestations: farm_infestations,
      infestation_other_type: infestation_other_type,
      any_other_info: any_other_info,
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

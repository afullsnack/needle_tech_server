import { connectDB } from "../lib/db";
import InputDistribution from "../models/InputDistribution";

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
      input_type_distributed,
      input_quantity_distributed,
      fertilizer_type,
      fertilizer_quantity,
      warehouse_location,
      warehouse_manager_name,
      warehouse_manager_contact,
      input_given_to,
      input_given_to_other_specify,
      input_given_to_cluster_head_name,
      input_given_to_cluster_contact,
      input_given_to_mech_company_name,
      input_given_to_mech_company_representative_name,
      input_given_to_mech_company_representative_contact,
      bank_representative_name,
      bank_representative_contact,
      distribution_date,
      any_other_info,
      distribution_image,
    } = req.body;

    console.log(enumerator_name, enumerator_contact, state, lga, town);

    let inputDist = new InputDistribution({
      enumerator_name: enumerator_name,
      enumerator_contact: enumerator_contact,
      state: state,
      lga: lga,
      town: town,
      input_type_distributed: input_type_distributed,
      input_quantity_distributed: input_quantity_distributed,
      fertilizer_type: fertilizer_type,
      fertilizer_quantity: fertilizer_quantity,
      warehouse_location: warehouse_location,
      warehouse_manager_name: warehouse_manager_name,
      warehouse_manager_contact: warehouse_manager_contact,
      input_given_to: input_given_to,
      input_given_to_other_specify: input_given_to_other_specify,
      input_given_to_cluster_head_name: input_given_to_cluster_head_name,
      input_given_to_cluster_contact: input_given_to_cluster_contact,
      input_given_to_mech_company_name: input_given_to_mech_company_name,
      input_given_to_mech_company_representative_name:
        input_given_to_mech_company_representative_name,
      input_given_to_mech_company_representative_contact:
        input_given_to_mech_company_representative_contact,
      bank_representative_name: bank_representative_name,
      bank_representative_contact: bank_representative_contact,
      distribution_date: distribution_date,
      any_other_info: any_other_info,
      distribution_image: distribution_image,
    });
    await inputDist.save();
    // client.close();
    // console.log("result from insert query", enumerator);
    res.send({
      error: false,
      status: "success",
      message: "Data saved successfully",
      data: inputDist,
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

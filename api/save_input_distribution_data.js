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
      enumeratorName: enumerator_name,
      enumeratorContact: enumerator_contact,
      state: state,
      lga: lga,
      town: town,
      inputTypeDistributed: input_type_distributed,
      inputQuantityDistributed: input_quantity_distributed,
      fertilizerType: fertilizer_type,
      fertilizerQuantity: fertilizer_quantity,
      warehouseLocation: warehouse_location,
      warehouseManagerName: warehouse_manager_name,
      warehouseManagerContact: warehouse_manager_contact,
      inputGivenTo: input_given_to,
      inputGivenToOtherSpecify: input_given_to_other_specify,
      inputGivenToClusterHeadName: input_given_to_cluster_head_name,
      inputGivenToClusterContact: input_given_to_cluster_contact,
      inputGivenToMechCompanyName: input_given_to_mech_company_name,
      inputGivenToMechCompanyRepresentativeName:
        input_given_to_mech_company_representative_name,
      inputGivenToMechCompanyRepresentativeContact:
        input_given_to_mech_company_representative_contact,
      bankRepresentativeName: bank_representative_name,
      bankRepresentativeContact: bank_representative_contact,
      distributionDate: distribution_date,
      anyOtherInfo: any_other_info,
      distributionImage: distribution_image,
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

import { connectDB } from "../lib/db";
import Inventory from "../models/InputInventory";
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
      input_quantity_delivered,
      fertilizer_quantity,
      fertilizer_type,
      warehosue_location,
      warehouse_manager_name,
      warehouse_manager_contact,
      name_of_bank_rep,
      contact_of_bank_rep,
      name_of_driver,
      vehicle_registration,
      warehouse_custody,
      date_of_delivery,
      any_other_info,
      distribution_image,
    } = req.body;

    console.log(
      enumerator_name,
      enumerator_contact,
      state,
      lga,
      town,
      input_type_distributed,
      input_quantity_delivered,
      fertilizer_quantity,
      fertilizer_type,
      warehosue_location,
      warehouse_manager_name,
      warehouse_manager_contact,
      name_of_bank_rep,
      contact_of_bank_rep,
      name_of_driver,
      vehicle_registration,
      warehouse_custody,
      date_of_delivery,
      any_other_info,
      distribution_image
    );

    let inventory = new Inventory({
      enumerator_name,
      enumerator_contact,
      state,
      lga,
      town,
      input_type_distributed,
      input_quantity_delivered,
      fertilizer_quantity,
      fertilizer_type,
      warehosue_location,
      warehouse_manager_name,
      warehouse_manager_contact,
      name_of_bank_rep,
      contact_of_bank_rep,
      name_of_driver,
      vehicle_registration,
      warehouse_custody,
      date_of_delivery,
      any_other_info,
      distribution_image,
    });
    await inventory.save();
    // client.close();
    // console.log("result from insert query", enumerator);
    res.send({
      error: false,
      status: "success",
      message: "data saved successfully",
      data: inventory,
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

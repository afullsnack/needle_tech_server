import { connectDB } from "../lib/db";
import EvacInventory from "../models/EvacInventory";
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
      needletechstaff_name,
      needletechstaff_contact,
      state,
      lga,
      type_of_input,
      input_unit,
      number_of_input_recieved,
    } = req.body;

    console.log(
      needletechstaff_name,
      needletechstaff_contact,
      state,
      lga,
      type_of_input,
      input_unit,
      number_of_input_recieved
    );

    let evacInventory = new EvacInventory({
      needletechstaff_name,
      needletechstaff_contact,
      state,
      lga,
      type_of_input,
      input_unit,
      number_of_input_recieved,
    });
    await evacInventory.save();
    // client.close();
    // console.log("result from insert query", enumerator);
    res.send({
      error: false,
      status: "success",
      message: "data saved successfully",
      data: evacInventory,
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

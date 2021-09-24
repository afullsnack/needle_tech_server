import { connectDB } from "../../lib/db";
import Enum from "../../models/User";
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
    const { firstname, lastname, phone, email, password, profilePic } =
      req.body;
    // const client = await clientPromise;
    // const db = client.db();
    // const enumeratorCollection = db.collection("enumerators");
    // const result = await enumeratorCollection.insertOne({
    //   firstname,
    //   lastname,
    //   phone,
    //   email,
    //   password,
    //   profilePic,
    // });

    let enumerator = new Enum({
      firstname,
      lastname,
      phone,
      email,
      password,
      profilePic,
    });
    await enumerator.save();
    // client.close();
    // console.log("result from insert query", enumerator);
    res.send({
      error: false,
      status: "success",
      message: "User created successfully",
      data: enumerator,
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

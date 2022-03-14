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
    console.log(req.body);
    const { email, pass } = req.body;
    // const client = await clientPromise;
    // const db = client.db();
    // const enumeratorCollection = db.collection("enumerators");
    // const result = await enumeratorCollection.findOne({
    //   email: email,
    // });
    // client.close();
    Enum.findOne({ email: email }, (err, found) => {
      // console.log(err, found);

      if (found?.password !== pass) {
        return res.send({
          error: true,
          status: "failed",
          message: "Incorrect password",
          data: null,
        });
      }
      res.send({
        error: false,
        status: found ? "success" : "failed",
        message: found ? "Found user" : "Failed to find user",
        data: err || found,
      });
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

import { hash } from "bcrypt";
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

    firstname = firstname.trim();
    lastname = lastname.trim();
    phone = phone.trim();
    email = email.trim();
    password = password.trim();

    // TEsts
    if (
      firstname == "" ||
      lastname == "" ||
      email == "" ||
      phone == "" ||
      password == ""
    ) {
      res.json({
        status: "failed",
        error: true,
        message: "Empty input fields!",
      });
    } else if (!/^[a-zA-Z ]*$/.test(firstname)) {
      res.json({
        status: "failed",
        error: true,
        message: "Invalid First Name entered",
      });
    } else if (!/^[a-zA-Z ]*$/.test(lastname)) {
      res.json({
        status: "failed",
        error: true,
        message: "Invalid Last Name entered",
      });
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      res.json({
        status: "failed",
        error: true,
        message: "Invalid email entered",
      });
    } else if (!/^[0-9]*$/.test(PN)) {
      res.json({
        status: "failed",
        error: true,
        message: "Invalid Phone Number entered",
      });
    } else if (password.length < 8) {
      res.json({
        status: "failed",
        error: true,
        message: "Password is too short",
      });
    } else {
      //Checking if user already exists
      Enum.find({ email })
        .then(async (result) => {
          if (result.length) {
            // A user already exists
            res.json({
              status: "failed",
              error: true,
              message: "Email already exists",
            });
          } else {
            // Try to create new User

            // Password handling
            const saltRounds = 10;
            await hash(password, saltRounds)
              .then((hashedPassword) => {
                let enumerator = new Enum({
                  firstname,
                  lastname,
                  phone,
                  email,
                  password: hashedPassword,
                  profilePic,
                });

                await enumerator
                  .save()
                  .then((result) => {
                    // handle account verification
                    res.send({
                      error: false,
                      status: "success",
                      message: "Enumerator created successfully",
                      data: result,
                    });
                  })
                  .catch((err) => {
                    console.log(err, "Error, msg");
                    res.json({
                      status: "failed",
                      error: true,
                      message: "An error occurred while saving user account",
                    });
                  });
              })
              .catch((err) => {
                console.log(err, "Error, msg");
                res.json({
                  status: "failed",
                  error: true,
                  message: "An error occurred while hashing password",
                });
              });
          }
        })
        .catch((err) => {
          console.log(err);
          res.json({
            status: "failed",
            error: true,
            message: "An error occurred while checking for existing user",
          });
        });
    }

    // save();
    // client.close();
    // console.log("result from insert query", enumerator);
  } catch (error) {
    res.send({
      error: true,
      status: "failed",
      message: error.toString() || err.message,
      data: null,
    });
  }
};

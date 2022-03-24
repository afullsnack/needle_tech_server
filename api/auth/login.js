import { compare } from "bcrypt";
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

  //

  try {
    console.log(req.body);
    var { email, pass } = req.body;
    email = email.trim();
    pass = pass.trim();

    if (email == "" || pass == "") {
      res.json({
        status: "failed",
        error: true,
        message: "Fields cannot be empty",
        data: null,
      });
    } else {
      console.log(email, pass);
      await Enum.find({ email })
        .then(async (data) => {
          if (data.length) {
            //User exists

            const hashedPassword = data[0].password;
            await compare(pass, hashedPassword)
              .then((result) => {
                if (result) {
                  //Password match
                  res.json({
                    status: "success",
                    error: false,
                    message: "Login Successful",
                    data: data[0],
                  });
                } else {
                  res.json({
                    status: "failed",
                    error: true,
                    message: "Password Incorrect",
                  });
                }
              })
              .catch((err) => {
                console.log(err, "Error occurred");
                res.json({
                  status: "failed",
                  error: true,
                  message: "An error occurred while comparing passwords",
                });
              });
          } else {
            res.json({
              status: "failed",
              error: true,
              message: "Invalid credentials entered",
            });
          }
        })
        .catch((err) => {
          console.log(err, "Error occurred");
          res.json({
            status: "failed",
            error: true,
            message: "An error occurred while checking for existing user",
          });
        });
    }

    // Enum.findOne({ email: email }, (err, found) => {
    //   // console.log(err, found);

    //   if (found?.password !== pass) {
    //     return res.send({
    //       error: true,
    //       status: "failed",
    //       message: "Incorrect password",
    //       data: null,
    //     });
    //   }
    //   res.send({
    //     error: false,
    //     status: found ? "success" : "failed",
    //     message: found ? "Found user" : "Failed to find user",
    //     data: err || found,
    //   });
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

import executeQuery from "../../lib/db";

export default async function handler(req, res) {
  try {
    // Get data submitted in request's body.
    const body = req.body;

    // Optional logging to see the responses
    // in the command line where next.js app is running.
    // console.log("body: ", body);

    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!body.firstName || !body.lastName) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: "First or last name not found" });
    }

    // Sends a HTTP success code
    res.status(200).json({ success: 'A user is added to the database' });
    const result = executeQuery({
      query: "INSERT INTO users(firstname, lastname) VALUES(?, ?)",
      values: [body.firstName, body.lastName],
    });
    // console.log("Result: ", result);
  } catch (error) {
    console.log(error);
  }
}

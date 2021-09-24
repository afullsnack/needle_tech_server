const clientPromise = require("./mongodb");

async function main() {
  console.log("Initializing db");
  const client = await clientPromise;
  const db = await client.db("field_app");
  const enumeratorCollection = await db.collection("enumerators");
  const result = await enumeratorCollection.findOne({
    email: email,
  });
  console.log(result);
  client.close();
}

main();

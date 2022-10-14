const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://jecinacDarko:bellatrixM42@mycluster.zmis2lc.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('MyDatabase');
    const collection = database.collection('MyProjects');
    const projects = collection.find({});
    const projectsArray = await projects.toArray();

    console.log(projectsArray);
  } finally {

    await client.close();
  }
}
run();

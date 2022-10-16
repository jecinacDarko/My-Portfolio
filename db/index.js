require('dotenv').config({path:'../.env'});

const { MongoClient } = require("mongodb");
const uri = process.env.API_KEY;
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

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://jecinacDarko:<password>@mycluster.zmis2lc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log(collection);
  // perform actions on the collection object
  client.close();
});
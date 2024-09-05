require('dotenv').config()
const express = require('express')
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.uri;

console.log(uri);

app.use(express.static('./public/'))
app.set('view engine', 'ejs')


console.log('I am on a node server, yo');


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

app.get('/mongo', async (req,res)=>{

  console.log('in /mongo');
  await client.connect();
  console.log('connected?');
  // Send a ping to confirm a successful connection
  let result = await client.db("laura-db").collection("collection")
    .find({}).toArray(); 
  console.log(result); 
})

run().catch(console.dir);

app.get('/', function (req, res){
  res.send('Hello Node from Ex on local dev box')
  res.sendFile('index.html');
})

app.get('/ejs', (req,res)=>{
  res.render('index', {
    myServerVariable : "something from server"
  });

})

app.listen(5000)

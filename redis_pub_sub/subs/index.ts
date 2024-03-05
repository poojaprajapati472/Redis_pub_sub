import express from "express";
import ioredis from "ioredis"
const app = express();
app.use(express.json()); 
import { QueueEvents, Worker } from 'bullmq';
const client = new ioredis({
    maxRetriesPerRequest:null
});
const queueEvents = new QueueEvents('Paint')
console.log("-------------------------------------")
 new Worker('Paint', async (job) => {
 const article=job.data;
 console.log("------------------->",article)
  },{connection:client}
);
queueEvents.on('completed', () => {
    console.log('done consuming');
  });




// const redis = require('redis');

// (async () => {

//   const client = redis.createClient();

//   const subscriber = client.duplicate();

//   await subscriber.connect();

//   await subscriber.subscribe('article', (message: any) => {
//     console.log(message); // 'message'
//   });

// })();
app.listen(3001,()=>{
    console.log("Server is running of subscribers on port 3001");
})
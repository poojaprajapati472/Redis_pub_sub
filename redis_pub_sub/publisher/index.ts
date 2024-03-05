import express from "express";
import { Queue } from 'bullmq';
import ioredis from "ioredis"
const app = express();
app.use(express.json()); 
const queue = new Queue('Paint',{connection:new ioredis()});
console.log("before pushing the data into queue",queue)
const article = {
    id: '123456',
    name: 'Using Redis Pub/Sub with Node.js',
    blog: 'Logrocket Blog',
  };
console.log("===================")
for(let i=0;i<10;i++){
    queue.add('publish',article);
    console.log("publish successfully",i)
}

app.listen(3000,()=>{
    console.log("Server is running of publisher on port 3000");
})
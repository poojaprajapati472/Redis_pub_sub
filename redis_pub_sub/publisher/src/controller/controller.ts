import { NextFunction, Request, Response } from "express";
const redis = require('redis');
const publisher = redis.createClient();

class Controller{
    async signup (req: Request, res: Response,next:NextFunction) {
        try{
            const data= req.body;
            await publisher.connect();
            await publisher.connect();
            await publisher.publish('data', JSON.stringify(data));
        }
        catch(error){
            console.log(error);
        }
    }
}
export const main=new Controller()
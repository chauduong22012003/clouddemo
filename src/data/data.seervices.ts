import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./user.schema";
import { Model } from "mongoose";

@Injectable()
export class userService{
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>){}
    async createUser(user: User): Promise<User> {
        const createdUser = new this.userModel(user);
        return createdUser.save();
    }
    
} 

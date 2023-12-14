import { Body, Controller, Post } from "@nestjs/common";
import { userService } from "./data.seervices";
import { User } from "./user.schema";

@Controller('user')
export class UserController{
    constructor(private readonly userSer:userService){}
    @Post()
    async createUser(@Body() user:User): Promise<User|undefined>{
        try{
            return this.userSer.createUser(user);
        }
        catch{
            return undefined;
        }
    }
}
import { Body, Controller, Post } from "@nestjs/common";
import { BillService, userService } from "./data.seervices";
import { User } from "./user.schema";
import { Bill } from "./bill.schema";









@Controller('user')
export class UserController{
    constructor(private readonly userSer:userService){}
    @Post('add')
    async createUser(@Body() user:User): Promise<boolean>{
        try{ 
            
            return this.userSer.createUser(user);
            
        }
        catch{
            return false;
        }
    }
    @Post('login')
    async check(@Body() user: User): Promise<any> {
        const isLoggedIn = await this.userSer.checkLogin(user);
        
        if (isLoggedIn) {
          return { username: user.username, password: user.password };
        } else {
          return { username: 'NONE', password: 'NONE' };
        }
    }
}

@Controller('bill')
export class BillController{
    constructor(private readonly billSer:BillService){}
    @Post('add')
    async createUser(@Body() bill:Bill): Promise<boolean>{
        try{ 
            
            return this.billSer.createBill(bill);
            
        }
        catch{
            return false;
        }
    }
}
import { CallHandler, ExecutionContext, Injectable, NestInterceptor, NestMiddleware } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./user.schema";
import { Model } from "mongoose";
import { Bill } from "./bill.schema";
import { ExpressAdapter } from "@nestjs/platform-express";
import * as bodyParser from 'body-parser';
import { Observable } from "rxjs";






@Injectable()
export class JsonMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if (req.headers['content-type'] === 'application/json') {
      req.body = JSON.parse(req.body);
    }
    next(); // Chuyển tiếp yêu cầu tới Middleware hoặc Router tiếp theo
  }
}
@Injectable()
export class BodyParserInterceptor implements NestInterceptor {
  constructor(private readonly expressAdapter: ExpressAdapter) {
    this.expressAdapter.use(bodyParser.urlencoded({ extended: true }));
    this.expressAdapter.use(bodyParser.json());
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle();
  }
}
@Injectable()
export class userService{
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>){}
    async createUser(user: User): Promise<boolean> {
        const {username,password}=user;
        const foundUser=await this.userModel.find({username,password});
        if(foundUser.length===0){
            const createdUser = new this.userModel(user);
            createdUser.save();
            return true;
        }
        else{
            return false;
        }

        
    }
    async checkLogin(user: User): Promise<boolean> {
        const { username, password } = user;

  const foundUser = await this.userModel.findOne({ username });

        if (foundUser && foundUser.password === password) {
            return true;
        } else {
            return false;
        }
    }
    
} 


@Injectable()
export class BillService{
    constructor(@InjectModel(Bill.name) private readonly billModel: Model<Bill>){}
    async createBill(bill: Bill): Promise<boolean> {
       
        try{
            const createdBill = new this.billModel(bill);
            createdBill.save();
            return true;
        }
        catch{
            return false;
        }

        
    }
}

import { Module } from "@nestjs/common";

import { User, UserSchema } from "./user.schema";
import { BillService, BodyParserInterceptor, userService } from "./data.seervices";
import { MongooseModule } from "@nestjs/mongoose";
import { BillController, UserController } from "./data.controllers";
import { Bill, BillSchema } from "./bill.schema";
import { APP_INTERCEPTOR } from "@nestjs/core";

@Module({
    imports:[MongooseModule.forFeature([{ name: User.name, schema: UserSchema },{ name: Bill.name, schema: BillSchema }]),],
    controllers: [UserController,BillController],
    providers:[userService,BillService],
})
export class DataModule {}
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User, UserSchema } from "./user.schema";
import { userService } from "./data.seervices";
import { MongooseModule } from "@nestjs/mongoose";
import { UserController } from "./data.controllers";

@Module({
    imports:[MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),],
    controllers: [UserController],
    providers:[userService],
})
export class DataModule {}
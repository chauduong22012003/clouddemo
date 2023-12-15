import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { DataModule } from './data/data.module';




@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:22012003@chauduong.s0trqyp.mongodb.net/phattien?retryWrites=true&w=majority'),
    DataModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule  {
  
}
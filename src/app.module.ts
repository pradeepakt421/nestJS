import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentController } from './student/student.controller';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/contactsDB')
  ],
  controllers: [StudentController],
})
export class AppModule { }



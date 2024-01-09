import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComplainModule } from './complain/complain.module';
import { ConfigModule } from '@nestjs/config';
import mongoose, { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileModule } from './profile/profile.module';

import { SwaggerModule } from './swagger/swagger.module';
import { FaqModule } from './faq/faq.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    ComplainModule,
    ProfileModule,
    SwaggerModule,
    FaqModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

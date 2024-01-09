import { Module } from '@nestjs/common';
import { ComplainController } from './complain.controller';
import { ComplainService } from './complain.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ComplainSchema } from './schemas/complain.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Complain', schema: ComplainSchema}])],
  controllers: [ComplainController],
  providers: [ComplainService]
})
export class ComplainModule {}

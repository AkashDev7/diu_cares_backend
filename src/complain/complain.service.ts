import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Complain } from './schemas/complain.schema';
import * as mongoose from 'mongoose';
import { NotFoundError } from 'rxjs';

import { Query } from 'express-serve-static-core';

@Injectable()
export class ComplainService {
    constructor(
        @InjectModel(Complain.name)
        private complainModel: mongoose.Model<Complain>
    ) {}


    async findAll(query: Query): Promise<Complain[]> {

        const resPerPage = 10
        const currentPage = Number(query.page) || 1
        const skip = resPerPage * (currentPage - 1)

        const keyword = query.keyword ? {
            title: {
                $regex: query.keyword,
                $options: 'i'
            }
        } : {};

        const complains = await this.complainModel.find({ ...keyword }).limit(resPerPage).skip(skip).exec();
        return complains
    }

    async create(complain: Complain): Promise<Complain>{
        const res = await this.complainModel.create(complain)
        return res
    }

    async findById(id: string): Promise<Complain>{
        const complain = await this.complainModel.findById(id).exec();

        if(!complain) {
            throw new NotFoundException('Complain not found');
        }

        return complain
    }

    async updateById(id: string, complain:Complain): Promise<Complain>{
        return await this.complainModel.findByIdAndUpdate(id, complain, {
            new: true,
            runValidators: true,
        }).exec();
    }

    async deleteById(id: string): Promise<any>{
        const deletedItem =  await this.complainModel.findByIdAndDelete(id).exec();
        console.log(deletedItem);
        
        return deletedItem
    }
}

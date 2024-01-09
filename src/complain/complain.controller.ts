import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ComplainService } from './complain.service';
import { Complain } from './schemas/complain.schema';
import { CreateComplainDto } from './dto/create-complain.dto';
import { UpdateComplainDto } from './dto/update-complain.dto';

import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('complain')
export class ComplainController {
    constructor(private complainService: ComplainService) {}

    @Get()
    async getAllComplains(@Query() query: ExpressQuery): Promise<Complain[]>{
        return this.complainService.findAll( query);
    }

    @Post()
    async createComplain(
        @Body()
        complain: CreateComplainDto
    ): Promise<Complain>{
        return this.complainService.create(complain);
    }

    @Get(':id')
    async getComplain(
        @Param('id')
        id: string
    ): Promise<Complain>{
        return this.complainService.findById(id);
    }

    @Put(':id')
    async updateComplain(
        @Param('id')
        id: string,
        @Body()
        complain: UpdateComplainDto
    ): Promise<Complain>{
        return this.complainService.updateById(id, complain);
    }

    @Delete(':id')
    async deleteComplain(
        @Param('id')
        id: string
    ): Promise<Complain>{
        return this.complainService.deleteById(id);
    }
}

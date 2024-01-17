import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { ComplainService } from './complain.service';
import { Complain } from './schemas/complain.schema';
import { CreateComplainDto } from './dto/create-complain.dto';
import { UpdateComplainDto } from './dto/update-complain.dto';

import { Query as ExpressQuery } from 'express-serve-static-core';
import { AuthGuard } from '@nestjs/passport';
import { Role } from '../auth/enum/role.enum';
import { Roles } from '../auth/roles.decorator';

@Controller('complain')
export class ComplainController {
    constructor(private complainService: ComplainService) {}

    //to secure routs use '@UseGuards(AuthGuard())'

    @Get()
    async getAllComplains(@Query() query: ExpressQuery): Promise<Complain[]>{
        return this.complainService.findAll( query);
    }

    @Post()
    @UseGuards(AuthGuard())
    @Roles(Role.Admin)
    async createComplain(
        @Body()
        complain: CreateComplainDto,
        @Req() req
    ): Promise<Complain>{

        return this.complainService.create(complain, req.user);
    }

    @Get(':id')
    async getComplain(
        @Param('id')
        id: string
    ): Promise<Complain>{
        return this.complainService.findById(id);
    }

    //from put to patch

    @Patch(':id')
    @Roles(Role.Admin)
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

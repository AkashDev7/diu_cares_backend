import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { LogInDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService
    ) {}

    async signUp(signUpDto: SignUpDto): Promise<{ token: string }>{
        const {name, email, password} = signUpDto

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await this.userModel.create({
            name,
            email,
            password: hashedPassword
        });
        const tokenData = {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          };
      
          const token = this.jwtService.sign(tokenData);
      
          return { token };
    }

    async login(logInDto : LogInDto): Promise<{ token: string }> {
        const { email, password} = logInDto;

        const user = await this.userModel.findOne({ email });

        if(!user) {
            throw new UnauthorizedException('Invalid email');
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if(!isPasswordMatched) {
            throw new UnauthorizedException('Invalid password');
        }

        const tokenData = {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          };
      
          const token = this.jwtService.sign(tokenData);
      
          return { token };
    }
}

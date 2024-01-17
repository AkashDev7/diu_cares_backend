import { Body, Controller, Post, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LogInDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {

    constructor (private authService: AuthService) {}

    @Post('/signup')
    signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
        return this.authService.signUp(signUpDto);
    }

    //CHNAGED FORM 'get' TO 'post' REQUEST TYPE

    @Post('/login')
    login(@Body() logInDto: LogInDto): Promise<{ token: string }> {
        return this.authService.login(logInDto);
    }
}

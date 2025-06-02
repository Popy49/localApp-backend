import { BadRequestException, Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    if (!signInDto.email || !signInDto.password) {
      throw new BadRequestException('Email and password are required');
    }

    return this.authService.signIn(signInDto.email, signInDto.password);
  }
}

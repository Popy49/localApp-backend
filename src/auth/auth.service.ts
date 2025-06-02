import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    saltOrRounds: number = 10;
    constructor(private usersService: UsersService, private jwtService: JwtService) {}

    async signIn(email: string, pass: string) {
        console.log("test", await bcrypt.hash("admin", this.saltOrRounds))
        const user = await this.usersService.findOneByEmail(email);
        if (!user) {
            throw new Error('User not found');
        }
        const isMatch = await bcrypt.compare(pass, user?.password);

        if (!isMatch) {
          throw new UnauthorizedException();
        }
     
        const payload = { email: user.email, sub: user.id, role: user.role };
        return {
            access_token: this.jwtService.signAsync(payload),
        };
    }

    async signUp(payload: CreateUserDto) {
        const hashPass = await bcrypt.hash(payload.password, this.saltOrRounds)
    
        let data = {
          ...payload,
          password: hashPass
        }
    
        const user = await this.usersService.create(data);
        return user;
      }
}

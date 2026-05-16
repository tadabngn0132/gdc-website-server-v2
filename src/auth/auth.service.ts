import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  login(loginDto: LoginDto) {
    // Implement login logic here
    return { message: 'Login successful', data: loginDto };
  }

  register(registerDto: RegisterDto) {
    // Implement registration logic here
    return { message: 'Registration successful', data: registerDto };
  }
}

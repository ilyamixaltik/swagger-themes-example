import { Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Authorize user' })
  login() {
    return this.authService.login();
  }

  @Post('logout')
  @ApiOperation({ summary: 'End session' })
  logout() {
    return this.authService.logout();
  }

  @Get('auth')
  @ApiOperation({ summary: 'Check session' })
  auth() {
    return this.authService.auth();
  }
}

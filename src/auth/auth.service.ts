import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return 'You have successfully logged in';
  }

  logout() {
    return `You have successfully completed your session`;
  }

  auth() {
    return `Session verification passed`;
  }
}

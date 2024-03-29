import { Body, Controller, Post } from '@nestjs/common';
import { User } from '../modules/user.interface';
import { Observable, map } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('register')
    register(@Body() user: User): Observable<User> {
        {
            return this.authService.registerAccount(user)
        }
    }

    @Post('login')
    login(@Body() user: User): Observable<{ token: string }> {
        return this.authService.loginAccount(user).pipe(
            map((jwt: string) => ({ token: jwt }))
        );
    }
}

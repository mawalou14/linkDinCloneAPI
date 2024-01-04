import { Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { Observable, from } from 'rxjs';

@Injectable()
export class AuthService {
    contructor() {}

    hashPassword(password: string): Observable<string> {
        return from(bcrypt.hash(password, 12));
    }

}

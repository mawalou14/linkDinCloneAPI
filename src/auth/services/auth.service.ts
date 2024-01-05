import { Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { Observable, from, map, switchMap } from 'rxjs';
import { User } from '../modules/user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../modules/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
        private jwtService: JwtService
    ) { }

    hashPassword(password: string): Observable<string> {
        return from(bcrypt.hash(password, 12));
    }

    registerAccount(user: User): Observable<User> {
        const { firstName, lastName, email, password } = user;

        return this.hashPassword(password).pipe(
            switchMap((hashPassword: string) => {
                return from(
                    this.userRepository.save({
                        firstName,
                        lastName,
                        email,
                        password: hashPassword
                    })
                ).pipe(
                    map((user: User) => {
                        delete user.password;
                        return user;
                    })
                )
            })
        )
    }

    validateUser(email: string, password: string): Observable<User> {
        return from(
            this.userRepository.findOne({
                where: {
                    email: email,
                    password: password
                }, 
                select: [
                    'id',
                    'firstName',
                    'lastName',
                    'email',
                    'password',
                    'role',
                ]
            })
        ).pipe(
            switchMap((user: User) => 
            from(bcrypt.compare(password, user.password)).pipe(
                map((isValidPassword: boolean) => {
                    if(isValidPassword) {
                        delete user.password;
                        return user;
                    }
                })
            ))
        )
    }
    

    loginAccount(user: User): Observable<string> {
        const { email, password } = user
        return this.validateUser(email, password).pipe(
            switchMap((user: User) => {
                if(user) {
                    //  create a JWT - credential
                    return from()
                }
            })
    }

}

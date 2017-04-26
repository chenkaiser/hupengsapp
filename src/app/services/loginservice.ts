import {Injectable } from '@angular/core';
import {LoginResponse } from '../models/loginresponse';
import {USERS} from '../models/mock-users';
@Injectable()
export class LoginService {
    authenticate(): Promise<LoginResponse>{
        let res:LoginResponse = null;


        return Promise.resolve(res);
    }
}
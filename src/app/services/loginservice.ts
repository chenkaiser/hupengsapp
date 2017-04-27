import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoginResponse } from '../models/loginresponse';
import { USERS } from '../models/mock-users';
import { User } from '../models/user';
@Injectable()


export class LoginService {
    currentUser: User;
    get IsAuthenticated(): boolean {
        return false;
    }
    public authenticate(): Promise<LoginResponse> {
        let res: LoginResponse = null;
        res.user = USERS[0];
        return Promise.resolve(res);
    }

    public login(credentials) {
        if (credentials.email === null || credentials.password === null) {
            return Observable.throw("Please insert credentials");
        } else {
            return Observable.create(observer => {
                // At this point make a request to your backend to make a real check!
                let access = (credentials.password === "pass" && credentials.email === "email");
                this.currentUser = new User({ Id: 1, Name: "test" });
                observer.next(access);
                observer.complete();
            });
        }
    }

    public register(credentials) {
        if (credentials.email === null || credentials.password === null) {
            return Observable.throw("Please insert credentials");
        } else {
            // At this point store the credentials to your backend!
            return Observable.create(observer => {
                observer.next(true);
                observer.complete();
            });
        }
    }

    public getUserInfo(): User {
        return this.currentUser;
    }

    public logout() {
        return Observable.create(observer => {
            this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    }

}
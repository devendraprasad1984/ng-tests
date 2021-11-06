import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    saveUserEndpoint = 'http://localhost:6201/users'

    constructor(private http: HttpClient) {
    }

    saveUser(payload: any) {
        return this.http.post(this.saveUserEndpoint, payload)
    }
}

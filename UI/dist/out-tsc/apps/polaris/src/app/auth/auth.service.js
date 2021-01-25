import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
let AuthService = class AuthService {
    constructor() {
        this.isLoggedIn = false;
    }
    login() {
        return of(true).pipe(delay(1000), tap(val => this.isLoggedIn = true));
    }
    logout() {
        this.isLoggedIn = false;
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root',
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map
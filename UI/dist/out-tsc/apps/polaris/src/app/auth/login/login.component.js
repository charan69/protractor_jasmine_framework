import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.setMessage();
    }
    setMessage() {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }
    login() {
        this.message = 'Trying to log in ...';
        this.authService.login().subscribe(() => {
            this.setMessage();
            if (this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                let redirect = 'select-practice'; //this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/home';
                // Set our navigation extras object
                // that passes on our global query params and fragment
                let navigationExtras = {
                    queryParamsHandling: 'preserve',
                    preserveFragment: true
                };
                // Redirect the user
                this.router.navigateByUrl(redirect, navigationExtras);
            }
        });
    }
    logout() {
        this.authService.logout();
        this.setMessage();
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService, Router])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map
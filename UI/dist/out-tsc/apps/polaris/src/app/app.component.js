import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { slideInAnimation } from './animations';
let AppComponent = class AppComponent {
    getAnimationData(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'pol-new-root',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.css'],
        animations: [slideInAnimation]
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map
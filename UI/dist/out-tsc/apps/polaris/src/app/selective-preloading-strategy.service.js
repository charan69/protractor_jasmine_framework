import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
let SelectivePreloadingStrategyService = class SelectivePreloadingStrategyService {
    constructor() {
        this.preloadedModules = [];
    }
    preload(route, load) {
        if (route.data && route.data['preload']) {
            // add the route path to the preloaded module array
            this.preloadedModules.push(route.path);
            // log the route path to the console
            console.log('Preloaded: ' + route.path);
            return load();
        }
        else {
            return of(null);
        }
    }
};
SelectivePreloadingStrategyService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root',
    })
], SelectivePreloadingStrategyService);
export { SelectivePreloadingStrategyService };
//# sourceMappingURL=selective-preloading-strategy.service.js.map
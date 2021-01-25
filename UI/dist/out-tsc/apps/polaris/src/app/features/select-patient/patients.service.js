import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let PatientsService = class PatientsService {
    constructor() {
        this.selectedpatient = new BehaviorSubject(undefined);
    }
};
PatientsService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root',
    })
], PatientsService);
export { PatientsService };
//# sourceMappingURL=patients.service.js.map
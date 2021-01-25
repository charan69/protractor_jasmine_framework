import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientsService } from '../patients.service';
let PatientDetailsComponent = class PatientDetailsComponent {
    constructor(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
};
PatientDetailsComponent = tslib_1.__decorate([
    Component({
        selector: 'pol-new-patient-details',
        templateUrl: './patient-details.component.html',
        styleUrls: ['./patient-details.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
        Router,
        PatientsService])
], PatientDetailsComponent);
export { PatientDetailsComponent };
//# sourceMappingURL=patient-details.component.js.map
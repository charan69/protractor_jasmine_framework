import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { PatientDetailsComponent } from '../features/select-patient/patient-details/patient-details.component';
const routes = [
// { path: 'patients/:id', component: PatientDetailsComponent },
];
let PatientsRoutingModule = class PatientsRoutingModule {
};
PatientsRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forChild(routes)
        ],
        exports: [
            RouterModule
        ]
    })
], PatientsRoutingModule);
export { PatientsRoutingModule };
//# sourceMappingURL=patients-routing.module.js.map
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PatientViewService } from '@polaris/api/services';
import { PatientSearchActionTypes, PatientSearchLoadSuccessAction } from './patients-search.actions';
import { switchMap, map } from 'rxjs/operators';
let PatientSearchEffects = class PatientSearchEffects {
    constructor(actions, service) {
        this.actions = actions;
        this.service = service;
        this.getPatientSearch = this.actions
            .pipe(ofType(PatientSearchActionTypes.PATIENTS_SEARCH), switchMap(data => {
            return this.service.getAllPatient(data.payload);
        }), map((value) => {
            return new PatientSearchLoadSuccessAction(value);
        }));
    }
};
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], PatientSearchEffects.prototype, "getPatientSearch", void 0);
PatientSearchEffects = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [Actions,
        PatientViewService])
], PatientSearchEffects);
export { PatientSearchEffects };
//# sourceMappingURL=patients-search.effects.js.map
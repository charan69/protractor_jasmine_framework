import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import * as searchActions from './patients-search.actions';
import { PatientSearchLinksQuery } from './patients-search.reducer';
let PatientSearchFacade = class PatientSearchFacade {
    constructor(store) {
        this.store = store;
        this.patientSearch = this.store.select(PatientSearchLinksQuery.getPatients);
    }
    getAllPatient(searchData) {
        this.store.dispatch(new searchActions.PatientSearchLoadAction(searchData));
        return this.patientSearch;
    }
};
PatientSearchFacade = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [Store])
], PatientSearchFacade);
export { PatientSearchFacade };
//# sourceMappingURL=patients-search.facade.js.map
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CareTeamsLinksQuery } from './care-team.reducer';
import * as searchActions from './care-team.actions';
let CareTeamFacade = class CareTeamFacade {
    constructor(store) {
        this.store = store;
        this.careTeams = this.store.select(CareTeamsLinksQuery.getCareTeam);
    }
    getPatientCareTeams(patientId) {
        this.store.dispatch(new searchActions.CareTeamsLoadAction(patientId));
        return this.careTeams;
    }
};
CareTeamFacade = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [Store])
], CareTeamFacade);
export { CareTeamFacade };
//# sourceMappingURL=care-team.facade.js.map
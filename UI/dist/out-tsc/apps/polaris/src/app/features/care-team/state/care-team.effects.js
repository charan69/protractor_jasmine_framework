import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { CareTeamsActionTypes, CareTeamsLoadSuccessAction } from './care-team.actions';
import { switchMap, map } from 'rxjs/operators';
import { CareTeamService } from '@polaris/api/services';
let CareTeamEffects = class CareTeamEffects {
    constructor(actions, service) {
        this.actions = actions;
        this.service = service;
        this.getCareTeam = this.actions
            .pipe(ofType(CareTeamsActionTypes.LOAD_CARETEAMS), switchMap(data => {
            return this.service.getPatientCareTeams(data.payload);
        }), map((value) => {
            return new CareTeamsLoadSuccessAction(value);
        }));
    }
};
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], CareTeamEffects.prototype, "getCareTeam", void 0);
CareTeamEffects = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [Actions,
        CareTeamService])
], CareTeamEffects);
export { CareTeamEffects };
//# sourceMappingURL=care-team.effects.js.map
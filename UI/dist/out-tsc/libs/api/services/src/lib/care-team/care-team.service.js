import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let CareTeamService = class CareTeamService {
    constructor(http) {
        this.http = http;
        this.apiPath = '/api/local/clinical/patients';
    }
    getPatientCareTeams(patientId) {
        return this.http.get(`${this.apiPath}/${patientId}/patient-aggregate`);
    }
};
CareTeamService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], CareTeamService);
export { CareTeamService };
//# sourceMappingURL=care-team.service.js.map
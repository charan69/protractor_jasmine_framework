import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let PatientViewService = class PatientViewService {
    constructor(http) {
        this.http = http;
    }
    getAllPatient(searchData) {
        return this.http.get(`/api/local/clinical/patients/patient-search?SearchText=` + searchData.searchText + `&SortOrder=` + searchData.sortOrder + `&AssignedProviderId=` + searchData.assignedProviderId);
    }
};
PatientViewService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], PatientViewService);
export { PatientViewService };
//# sourceMappingURL=patientview.service.js.map
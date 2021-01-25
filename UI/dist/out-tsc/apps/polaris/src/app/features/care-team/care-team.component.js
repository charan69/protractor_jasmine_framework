import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SpecialtyTypes, Providers, PhoneNumbers } from './models/care-team.model';
import { PatientsService } from '../select-patient/patients.service';
import { CareTeamFacade } from './state/care-team.facade';
let CareTeamComponent = class CareTeamComponent {
    constructor(patientService, careTeamFacade) {
        this.patientService = patientService;
        this.careTeamFacade = careTeamFacade;
    }
    ngOnInit() {
        this.patientService.selectedpatient.subscribe(patient => {
            this.patientId = patient.patientId;
            this.loadPatientCareTeams();
        });
    }
    loadPatientCareTeams() {
        this.careTeamFacade.getPatientCareTeams(this.patientId).subscribe((value) => {
            if (value.patientCareTeams) {
                this.careTeam = value.patientCareTeams;
                this.membersCount = this.careTeam.length;
            }
        });
    }
    getSpecialty(specialtyId) {
        const specialtyName = SpecialtyTypes.find(data => data.id === specialtyId).value;
        return specialtyName;
    }
    getProviderName(providerId) {
        const provider = Providers.find(data => data.id === providerId).value;
        return provider;
    }
    getProviderPhone(providerId) {
        const phoneNumber = PhoneNumbers.find(data => data.id === providerId).value;
        return phoneNumber;
    }
};
CareTeamComponent = tslib_1.__decorate([
    Component({
        selector: 'pol-new-care-team',
        templateUrl: 'care-team.component.html',
        styleUrls: ['./care-team.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [PatientsService,
        CareTeamFacade])
], CareTeamComponent);
export { CareTeamComponent };
//# sourceMappingURL=care-team.component.js.map
import * as tslib_1 from "tslib";
// TODO: Feature Componetized like CrisisCenter
import { Component, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientsService } from '../select-patient/patients.service';
import { PatientSearchModel } from '../select-patient/models/patient-model';
import { PatientViewService } from '@polaris/api/services';
import { PatientSearchFacade } from './state/patients-search.facade';
let PatientsSearchComponent = class PatientsSearchComponent {
    constructor(service, route, router, patientService, patientSearchFacade, changeDetectorRef) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.patientService = patientService;
        this.patientSearchFacade = patientSearchFacade;
        this.changeDetectorRef = changeDetectorRef;
        this.OnClose = new EventEmitter();
        this.patients = [];
        this.searchText = '';
        this.searchMode = 'name';
        this.recentPatients = [];
    }
    ngOnInit() {
        const searchData = new PatientSearchModel();
        searchData.searchText = '';
        searchData.sortOrder = this.searchMode === 'name' ? '' : this.searchMode;
        searchData.assignedProviderId = '';
        this.patientSearchFacade.getAllPatient(searchData).subscribe(value => {
            if (value) {
                this.patients = value.items;
                this.changeDetectorRef.detectChanges();
            }
        });
    }
    getPatientAvatar(patients) {
        if (patients && patients.dnFirstName) {
            return patients.dnFirstName.split(' ').length > 1 ?
                patients.dnFirstName.split(' ')[0].charAt(0).concat(patients.dnLastName.split(' ')[1].charAt(0)) :
                patients.dnFirstName.split(' ')[0].charAt(0);
        }
    }
    OnSelect(patient) {
        this.OnClose.emit(true);
        this.service.selectedpatient.next(patient);
        const checkPatient = this.recentPatients.find(patients => patients.patientId === patient.patientId);
        if (!checkPatient) {
            this.recentPatients.push(patient);
        }
        this.router.navigate(['/home/patients/' + patient.patientId]);
    }
    onCancel() {
        this.OnClose.emit(true);
    }
    searchPatient(searchText) {
        const searchData = new PatientSearchModel();
        searchData.searchText = searchText ? searchText : '';
        searchData.sortOrder = this.searchMode === 'name' || !searchText ? '' : this.searchMode;
        searchData.assignedProviderId = '';
        this.patientService.getAllPatient(searchData).subscribe((value) => {
            this.patients = value.items;
            this.changeDetectorRef.detectChanges();
        });
    }
    getRandomColor(index) {
        const value = index % 5;
        switch (value) {
            case 0: {
                return { 'background-color': '#8d90ce' };
            }
            case 1: {
                return { 'background-color': '#8dcea1' };
            }
            case 3: {
                return { 'background-color': '#695229' };
            }
            case 4: {
                return { 'background-color': '#cef0ea' };
            }
            default: {
                return { 'background-color': '#edc7cc' };
            }
        }
    }
};
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], PatientsSearchComponent.prototype, "OnClose", void 0);
PatientsSearchComponent = tslib_1.__decorate([
    Component({
        selector: 'pol-new-patients-search',
        templateUrl: './patients-search.component.html',
        styleUrls: ['./patients-search.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [PatientsService,
        ActivatedRoute,
        Router,
        PatientViewService,
        PatientSearchFacade,
        ChangeDetectorRef])
], PatientsSearchComponent);
export { PatientsSearchComponent };
//# sourceMappingURL=patients-search.component.js.map
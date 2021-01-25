import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientsService } from './../features/select-patient/patients.service';
import { MatSidenav } from '@angular/material/sidenav';
let HomeComponent = class HomeComponent {
    constructor(route, router, service, elementRef) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.elementRef = elementRef;
        this.isDashboard = true;
    }
    get getPatientAvatar() {
        if (this.patients && this.patients.dnFirstName) {
            return this.patients.dnFirstName.split(' ').length > 1 ?
                this.patients.dnFirstName.split(' ')[0].charAt(0).concat(this.patients.dnLastName.split(' ')[1].charAt(0)) :
                this.patients.dnFirstName.split(' ')[0].charAt(0);
        }
    }
    ngOnInit() {
        this.service.selectedpatient.subscribe((patient) => {
            this.patients = patient;
            if (this.patients) {
                this.isDashboard = false;
            }
        });
    }
    redirectToDashboard() {
        this.isDashboard = true;
        this.router.navigate(['/home']);
    }
    redirectToPatient() {
        this.isDashboard = false;
        this.router.navigate(['/home/patients']);
    }
    checkPatient() {
        if (this.patients) {
            this.redirectToPatient();
        }
        else {
            this.redirectToDashboard();
        }
    }
    close() {
        this.sidenav.close();
    }
    toggle() {
        this.sidenav.toggle();
    }
    backdropClick(event) {
        const clickedInside = this.elementRef.nativeElement.contains(event);
        if (!clickedInside && !event.classList.contains("mat-option-text")) {
            this.sidenav.close();
        }
        else if (clickedInside && event.firstChild && event.firstChild.classList && event.firstChild.classList.contains("sticky-body")) {
            this.sidenav.close();
        }
    }
};
tslib_1.__decorate([
    ViewChild('sidenav', { static: false }),
    tslib_1.__metadata("design:type", MatSidenav)
], HomeComponent.prototype, "sidenav", void 0);
tslib_1.__decorate([
    HostListener('document:click', ['$event.target']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], HomeComponent.prototype, "backdropClick", null);
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'pol-new-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
        Router,
        PatientsService,
        ElementRef])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map
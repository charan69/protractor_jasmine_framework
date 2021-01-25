import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PatientsService } from '@polaris/features/select-patient/patients.service';
let StickyNoteService = class StickyNoteService {
    constructor(http, patientService) {
        this.http = http;
        this.patientService = patientService;
        this.apiPath = '/api/local/clinical/patients';
    }
    loadStickyNotes() {
        this.patientService.selectedpatient.subscribe((patient) => {
            this.patients = patient;
        });
        return this.http.get(`${this.apiPath}/${this.patients.patientId}/sticky-notes`);
    }
    updateStickyNotes(body) {
        const headers = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json-patch+json'
            })
        };
        return this.http.put(`${this.apiPath}/${body.patientId}/sticky-notes/${body.noteSid}/edit`, JSON.stringify(body), headers);
    }
    deleteStickyNotes(deletedNoteId) {
        const queryString = `${this.apiPath}/sticky-notes/${deletedNoteId}/delete`;
        return this.http.request('delete', queryString);
    }
    addStickyNotes(addStickyNote) {
        const headers = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json-patch+json'
            })
        };
        return this.http.post(`${this.apiPath}/${addStickyNote.patientId}/sticky-notes/post`, addStickyNote, headers);
    }
};
StickyNoteService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        PatientsService])
], StickyNoteService);
export { StickyNoteService };
//# sourceMappingURL=sticky-notes.service.js.map
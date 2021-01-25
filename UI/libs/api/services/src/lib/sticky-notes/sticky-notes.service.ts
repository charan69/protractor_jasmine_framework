import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IStickyNotesService } from '@polaris/api/interfaces';
import { PatientsService } from '@polaris/features/select-patient/patients.service';
import { PatientViewModel } from '@polaris/features/select-patient/models/patientviewmodel';
import { StickyNotesModel } from '@polaris/features/sticky-notes/sticky-notes.model';


@Injectable({
  providedIn: 'root',
})
export class StickyNoteService implements IStickyNotesService {
  constructor(private http: HttpClient,
    private patientService: PatientsService
    ) { }

    patients: PatientViewModel;
    public apiPath = '/api/local/clinical/patients';

  public loadStickyNotes() {
    this.patientService.selectedpatient.subscribe((patient)=>{
      this.patients = patient;
    });
    return this.http.get<StickyNotesModel[]>(`${this.apiPath}/${this.patients.patientId}/sticky-notes`);
  }

  public updateStickyNotes(body: StickyNotesModel): Observable<any> {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json'
      })
    }
    return this.http.put<StickyNotesModel>(`${this.apiPath}/${body.patientId}/sticky-notes/${body.noteSid}/edit`, JSON.stringify(body), headers);
  }

  public deleteStickyNotes(deletedNoteId) {
    const queryString = `${this.apiPath}/sticky-notes/${deletedNoteId}/delete`;
    return this.http.request<boolean>('delete', queryString);
  }

  public addStickyNotes(addStickyNote: StickyNotesModel): Observable<any> {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json'
      })
    };
    return this.http.post<StickyNotesModel>(`${this.apiPath}/${addStickyNote.patientId}/sticky-notes/post`, addStickyNote, headers)
  }
}

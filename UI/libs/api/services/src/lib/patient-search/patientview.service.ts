import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PatientSearchModel } from '@polaris/features/select-patient/models/patient-model';
import { PatientViewModelList } from 'app/features/select-patient/models/patientviewmodel';


@Injectable({
    providedIn: 'root',
})
export class PatientViewService {
    constructor(private http: HttpClient
    ) { }

    public getAllPatient(searchData: PatientSearchModel) {
         return this.http.get<PatientViewModelList>(`/api/local/clinical/patients/patient-search?SearchText=`+ searchData.searchText + `&SortOrder=`+ searchData.sortOrder+ `&AssignedProviderId=`+ searchData.assignedProviderId );
    }
}

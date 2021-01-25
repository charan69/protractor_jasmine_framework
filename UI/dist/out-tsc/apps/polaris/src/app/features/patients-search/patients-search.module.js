import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { patientSearchReducer } from './state/patients-search.reducer';
import { PatientSearchEffects } from './state/patients-search.effects';
import { PatientSearchFacade } from './state/patients-search.facade';
import { PatientsSearchComponent } from './patients-search.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'app/app-matierial.module';
import { CommonModule } from '@angular/common';
let PatientSearchModule = class PatientSearchModule {
};
PatientSearchModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            MaterialModule,
            StoreModule.forFeature('patientSearchReducer', patientSearchReducer),
            EffectsModule.forFeature([PatientSearchEffects]),
        ],
        providers: [PatientSearchFacade,],
        declarations: [PatientsSearchComponent],
        exports: [
            PatientsSearchComponent,
        ],
    })
], PatientSearchModule);
export { PatientSearchModule };
//# sourceMappingURL=patients-search.module.js.map
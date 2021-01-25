import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientsRoutingModule } from './patients-routing.module';
import { StickyNotesListComponent } from './sticky-notes/list/sticky-notes-list.component';
import { StickyNotesComponent } from './sticky-notes/sticky-notes.component';
import { PatientDetailsComponent } from '../features/select-patient/patient-details/patient-details.component';
import { StickyNotesDialogComponent } from './sticky-notes/sticky-notes-dialog/sticky-notes-dialog.component';
import { MaterialModule } from '../app-matierial.module';
import { StickyNotesFacade } from './sticky-notes/state/sticky-notes.facade';
import { AlertModalComponent } from './sticky-notes/common/alert-modal/alert-modal.component';
import { CareTeamModule } from '@polaris/features/care-team/care-team.module';
let PatientsModule = class PatientsModule {
};
PatientsModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            PatientsRoutingModule,
            MaterialModule,
            CareTeamModule,
        ],
        declarations: [
            StickyNotesListComponent,
            StickyNotesComponent,
            PatientDetailsComponent,
            StickyNotesDialogComponent,
            AlertModalComponent,
        ],
        providers: [
            StickyNotesFacade,
        ],
        exports: [],
        entryComponents: [
            StickyNotesDialogComponent,
            AlertModalComponent
        ]
    })
], PatientsModule);
export { PatientsModule };
//# sourceMappingURL=patients.module.js.map
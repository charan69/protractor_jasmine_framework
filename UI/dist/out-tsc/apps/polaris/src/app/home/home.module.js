import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { PatientsModule } from './../features/patients.module';
import { MaterialModule } from '../app-matierial.module';
import { PatientSearchModule } from 'app/features/patients-search/patients-search.module';
let HomeModule = class HomeModule {
};
HomeModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            HomeRoutingModule,
            PatientsModule,
            MaterialModule,
            PatientSearchModule,
        ],
        declarations: [
            HomeComponent,
        ]
    })
], HomeModule);
export { HomeModule };
//# sourceMappingURL=home.module.js.map
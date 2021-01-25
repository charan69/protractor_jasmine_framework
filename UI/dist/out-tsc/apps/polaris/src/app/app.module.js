import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { SelectPracticeComponent } from './select-practice/select-practice.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { stickyNotesReducer } from './features/sticky-notes/state/sticky-notes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StickyNotesEffects } from './features/sticky-notes/state/sticky-notes.effects';
import { SpeechRecognitionService } from './shared-services/speech-recognition-service';
let AppModule = class AppModule {
    // Diagnostic only: inspect router configuration
    constructor(router) {
        // Use a custom replacer to display function names in the route configs
        // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
        // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
    }
};
AppModule = tslib_1.__decorate([
    NgModule({
        imports: [
            BrowserModule,
            BrowserAnimationsModule,
            FormsModule,
            AuthModule,
            AppRoutingModule,
            HttpClientModule,
            StoreModule.forRoot({ stickyNotes: stickyNotesReducer }),
            EffectsModule.forRoot([StickyNotesEffects]),
        ],
        declarations: [
            AppComponent,
            PageNotFoundComponent,
            SelectPracticeComponent,
        ],
        providers: [
            SpeechRecognitionService,
        ],
        bootstrap: [AppComponent]
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map
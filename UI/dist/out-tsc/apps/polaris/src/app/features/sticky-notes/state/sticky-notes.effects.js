import * as tslib_1 from "tslib";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { StickyNotesActionTypes, StickyNotesLoadAction, StickyNotesLoadSuccessAction, } from './sticky-notes.actions';
import { switchMap, map, mergeMap } from 'rxjs/operators';
import { StickyNoteService } from '@polaris/api/services';
let StickyNotesEffects = class StickyNotesEffects {
    constructor(actions, service) {
        this.actions = actions;
        this.service = service;
        this.getStickyNotes = this.actions
            .pipe(ofType(StickyNotesActionTypes.LOAD_NOTES), mergeMap(() => this.service.loadStickyNotes()
            .pipe(map(data => {
            return new StickyNotesLoadSuccessAction(data);
        }))));
        this.addStickyNote = this.actions
            .pipe(ofType(StickyNotesActionTypes.ADD_STICKY_NOTE), switchMap(data => {
            return this.service.addStickyNotes(data.payload);
        }), map(() => {
            return new StickyNotesLoadAction();
        }));
        this.editStickyNote = this.actions
            .pipe(ofType(StickyNotesActionTypes.EDIT_STICKY_NOTE), switchMap(action => {
            return this.service.updateStickyNotes(action.payload);
        }), map(() => {
            return new StickyNotesLoadAction();
        }));
        this.deleteStickyNote = this.actions
            .pipe(ofType(StickyNotesActionTypes.DELETE_STICKY_NOTE), switchMap(action => {
            return this.service.deleteStickyNotes(action.noteSid);
        }), map(() => {
            return new StickyNotesLoadAction();
        }));
    }
};
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], StickyNotesEffects.prototype, "getStickyNotes", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], StickyNotesEffects.prototype, "addStickyNote", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], StickyNotesEffects.prototype, "editStickyNote", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], StickyNotesEffects.prototype, "deleteStickyNote", void 0);
StickyNotesEffects = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [Actions,
        StickyNoteService])
], StickyNotesEffects);
export { StickyNotesEffects };
//# sourceMappingURL=sticky-notes.effects.js.map
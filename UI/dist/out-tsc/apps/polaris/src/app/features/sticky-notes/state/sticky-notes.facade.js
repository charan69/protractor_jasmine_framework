import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import * as searchActions from './sticky-notes.actions';
let StickyNotesFacade = class StickyNotesFacade {
    constructor(store) {
        this.store = store;
        this.notesView = this.store.select(store => store.stickyNotes);
    }
    loadNotes() {
        this.store.dispatch(new searchActions.StickyNotesLoadAction());
        return this.notesView;
    }
    addNotes(note) {
        this.store.dispatch(new searchActions.StickyNotesAddAction(note));
    }
    editNote(editedNote) {
        this.store.dispatch(new searchActions.StickyNotesEditAction(editedNote));
    }
    deleteNote(noteSid) {
        this.store.dispatch(new searchActions.StickyNotesDeleteAction(noteSid));
    }
};
StickyNotesFacade = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [Store])
], StickyNotesFacade);
export { StickyNotesFacade };
//# sourceMappingURL=sticky-notes.facade.js.map
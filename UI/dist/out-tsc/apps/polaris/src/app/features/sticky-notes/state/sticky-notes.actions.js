export var StickyNotesActionTypes;
(function (StickyNotesActionTypes) {
    StickyNotesActionTypes["LOAD_NOTES"] = "[Sticky Notes] Load";
    StickyNotesActionTypes["LOAD_NOTES_SUCCESS"] = "[Sticky Notes] Load Success";
    StickyNotesActionTypes["ADD_STICKY_NOTE"] = "[Sticky Notes] Add Sticky Note";
    StickyNotesActionTypes["ADD_STICKY_NOTE_SUCCESS"] = "[Sticky Notes] Add Sticky Note Success";
    StickyNotesActionTypes["EDIT_STICKY_NOTE"] = "[Sticky Notes] Edit Sticky Note";
    StickyNotesActionTypes["DELETE_STICKY_NOTE"] = "[Sticky Notes] Delete Sticky Note";
    StickyNotesActionTypes["DELETE_STICKY_NOTE_SUCCESS"] = "[Sticky Notes] Delete Sticky Note success";
})(StickyNotesActionTypes || (StickyNotesActionTypes = {}));
export class StickyNotesLoadAction {
    constructor() {
        this.type = StickyNotesActionTypes.LOAD_NOTES;
    }
}
export class StickyNotesLoadSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = StickyNotesActionTypes.LOAD_NOTES_SUCCESS;
    }
}
export class StickyNotesAddAction {
    constructor(payload) {
        this.payload = payload;
        this.type = StickyNotesActionTypes.ADD_STICKY_NOTE;
    }
}
export class StickyNotesAddSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = StickyNotesActionTypes.ADD_STICKY_NOTE_SUCCESS;
    }
}
export class StickyNotesEditAction {
    constructor(payload) {
        this.payload = payload;
        this.type = StickyNotesActionTypes.EDIT_STICKY_NOTE;
    }
}
export class StickyNotesDeleteAction {
    constructor(noteSid) {
        this.noteSid = noteSid;
        this.type = StickyNotesActionTypes.DELETE_STICKY_NOTE;
    }
}
export class StickyNotesDeleteSuccessAction {
    constructor(noteSid) {
        this.noteSid = noteSid;
        this.type = StickyNotesActionTypes.DELETE_STICKY_NOTE_SUCCESS;
    }
}
//# sourceMappingURL=sticky-notes.actions.js.map
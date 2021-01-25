import { StickyNotesActionTypes } from './sticky-notes.actions';
export const defaultState = {
    notes: [],
};
export function stickyNotesReducer(state = defaultState, action) {
    switch (action.type) {
        case StickyNotesActionTypes.LOAD_NOTES_SUCCESS: {
            return Object.assign({}, state, { notes: action.payload });
        }
        case StickyNotesActionTypes.ADD_STICKY_NOTE_SUCCESS: {
            return Object.assign({}, state, { notes: action.payload });
        }
        default: {
            return state;
        }
    }
}
export const stickyNotes = 'stickyNotesReducer';
//# sourceMappingURL=sticky-notes.reducer.js.map
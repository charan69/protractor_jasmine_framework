import { Observable } from 'rxjs';
import { StickyNotesModel } from '@polaris/features/sticky-notes/sticky-notes.model';


export interface IStickyNotesService {
    loadStickyNotes(): Observable<StickyNotesModel[]>;
    updateStickyNotes(body: StickyNotesModel): Observable<StickyNotesModel[]>;
    deleteStickyNotes(deletedNoteId): Observable<boolean>;
    addStickyNotes(addStickyNote: StickyNotesModel): Observable<StickyNotesModel[]>;
}

import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { StickyNotesModel, NoteTypes } from '../sticky-notes.model';
import { PatientsService } from './../../../features/select-patient/patients.service';
import { MatDialog } from '@angular/material/dialog';
import { StickyNotesDialogComponent } from '../sticky-notes-dialog/sticky-notes-dialog.component';
import Speech from 'speak-tts';
import { StickyNotesFacade } from '../state/sticky-notes.facade';
import { AlertModalComponent } from '../common/alert-modal/alert-modal.component';
import * as moment from 'moment';
const speech = new Speech();
let StickyNotesListComponent = class StickyNotesListComponent {
    constructor(patientService, dialog, stickyNotesFacade) {
        this.patientService = patientService;
        this.dialog = dialog;
        this.stickyNotesFacade = stickyNotesFacade;
        this.stickyNotesCount = new EventEmitter();
        this.isAddClicked = false;
        this.userName = 'David Ford, MD';
        this.date = new Date().toISOString().slice(0, 10);
        this.newEditNote = '';
        this.newAddNote = '';
        this.selectedNote = new StickyNotesModel();
        this.showAlert = false;
        this.playStickyNote = true;
        this.selectedId = 0;
    }
    ngOnInit() {
        this.patientService.selectedpatient.subscribe((patient) => {
            this.patients = patient;
            this.loadNotes();
        });
    }
    loadNotes() {
        this.stickyNotesFacade.loadNotes().subscribe((notes) => {
            if (notes) {
                this.notesView = notes.notes;
                this.stickyNotesCount.emit(this.notesView.length);
            }
            this.selectedNote.noteSid = 0;
            this.selectedId = 0;
        });
    }
    saveNote(newNote, newNoteBody) {
        if (newNoteBody === '') {
            this.showAlert = true;
            return;
        }
        else {
            const editedNote = this.notesView.find(note => note.noteSid === newNote.noteSid);
            if (editedNote) {
                editedNote.body = newNoteBody;
                this.stickyNotesFacade.editNote(editedNote);
                this.loadNotes();
            }
            this.newEditNote = '';
            this.selectedNote = new StickyNotesModel();
        }
    }
    removeNote(deletedNote) {
        this.openAlertModel(deletedNote);
    }
    openAlertModel(deletedNote) {
        const dialogRef = this.dialog.open(AlertModalComponent, {
            width: '310px',
            data: {
                title: 'Delete?',
                body: 'Do you want to delete the selected note?',
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 'cancel' || result === undefined) {
                return;
            }
            else {
                this.stickyNotesFacade.deleteNote(deletedNote.noteSid);
                this.loadNotes();
                this.newEditNote = '';
            }
        });
    }
    addNote(newNoteBody) {
        const newNote = new StickyNotesModel();
        newNote.practiceId = 1;
        newNote.patientId = this.patients.patientId;
        newNote.body = newNoteBody;
        newNote.classType = NoteTypes.STICKY;
        this.stickyNotesFacade.addNotes(newNote);
        this.loadNotes();
    }
    openDialog() {
        const dialogRef = this.dialog.open(StickyNotesDialogComponent, {
            width: '310px'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 'cancel' || result === undefined) {
                return;
            }
            else {
                this.addNote(result);
            }
        });
    }
    cancelEdit() {
        this.selectedNote = new StickyNotesModel();
        this.newEditNote = '';
    }
    onPlayStickyNote(note) {
        this.selectedId = note.noteSid;
        speech.speak({
            text: note.body,
            listeners: {
                onend: () => {
                    this.onPlayStopStickyNote();
                },
            }
        }).then(() => {
            this.onPlayStopStickyNote();
        });
    }
    onPlayStopStickyNote() {
        this.selectedId = 0;
        speech.cancel();
    }
    convertDateFormat(value) {
        return moment(value, 'YYYYMMDDHHmmss').format('MM/DD/YY h:mm A');
    }
};
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], StickyNotesListComponent.prototype, "stickyNotesCount", void 0);
StickyNotesListComponent = tslib_1.__decorate([
    Component({
        selector: 'pol-new-sticky-notes-list',
        templateUrl: './sticky-notes-list.component.html',
        styleUrls: ['./sticky-notes-list.component.css'],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [PatientsService,
        MatDialog,
        StickyNotesFacade])
], StickyNotesListComponent);
export { StickyNotesListComponent };
//# sourceMappingURL=sticky-notes-list.component.js.map
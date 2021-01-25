import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SpeechRecognitionService } from 'app/shared-services/speech-recognition-service';
let StickyNotesDialogComponent = class StickyNotesDialogComponent {
    constructor(dialogRef, speechRecognigationService) {
        this.dialogRef = dialogRef;
        this.speechRecognigationService = speechRecognigationService;
        this.date = new Date().toISOString().slice(0, 10);
        this.newAddNote = '';
        this.showAlert = false;
        this.showSpeechButton = true;
        this.speechData = '';
    }
    onCancel() {
        this.dialogRef.close('cancel');
    }
    onSave() {
        if (this.newAddNote === '') {
            this.showAlert = true;
            return;
        }
        else {
            this.dialogRef.close(this.newAddNote);
        }
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.speechRecognigationService.DestroySpeechObject();
    }
    activateSpeechToText() {
        this.showSpeechButton = false;
        this.speechRecognigationService.record()
            .subscribe(
        //listener
        (value) => {
            this.speechData = value;
            this.newAddNote = value;
        }, 
        //errror
        (err) => {
            console.log(err);
            if (err.error == "no-speech") {
                this.activateSpeechToText();
            }
        }, 
        //completion
        () => {
            this.showSpeechButton = true;
            this.deActivateSpeechToText(event);
        });
    }
    deActivateSpeechToText(event) {
        this.showSpeechButton = true;
        event.preventDefault();
        event.stopPropagation();
        this.speechRecognigationService.DestroySpeechObject();
    }
};
StickyNotesDialogComponent = tslib_1.__decorate([
    Component({
        selector: 'pol-new-sticky-notes-dialog',
        templateUrl: 'sticky-notes-dialog.component.html',
        styleUrls: ['./sticky-notes-dialog.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [MatDialogRef,
        SpeechRecognitionService])
], StickyNotesDialogComponent);
export { StickyNotesDialogComponent };
//# sourceMappingURL=sticky-notes-dialog.component.js.map
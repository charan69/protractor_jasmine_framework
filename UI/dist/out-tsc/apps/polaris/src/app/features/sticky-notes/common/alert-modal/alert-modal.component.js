import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
let AlertModalComponent = class AlertModalComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onCancel() {
        this.dialogRef.close('cancel');
    }
    onDelete() {
        this.dialogRef.close('delete');
    }
};
AlertModalComponent = tslib_1.__decorate([
    Component({
        selector: 'pol-alert-modal',
        templateUrl: 'alert-modal.component.html',
        styleUrls: ['./alert-modal.component.css']
    }),
    tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
    tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object])
], AlertModalComponent);
export { AlertModalComponent };
//# sourceMappingURL=alert-modal.component.js.map
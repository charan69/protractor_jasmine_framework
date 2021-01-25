import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
/**
 * Async modal dialog service
 * DialogService makes this app easier to test by faking this service.
 * TODO: better modal implementation that doesn't use window.confirm
 */
let DialogService = class DialogService {
    /**
     * Ask user to confirm an action. `message` explains the action and choices.
     * Returns observable resolving to `true`=confirm or `false`=cancel
     */
    confirm(message) {
        const confirmation = window.confirm(message || 'Is it OK?');
        return of(confirmation);
    }
    ;
};
DialogService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root',
    })
], DialogService);
export { DialogService };
//# sourceMappingURL=dialog.service.js.map
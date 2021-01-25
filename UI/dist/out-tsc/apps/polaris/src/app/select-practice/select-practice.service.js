import * as tslib_1 from "tslib";
var SelectPracticeService_1;
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import { PRACTICES } from './mock-select-practices';
let SelectPracticeService = SelectPracticeService_1 = class SelectPracticeService {
    constructor(messageService) {
        this.messageService = messageService;
        this.crises$ = new BehaviorSubject(PRACTICES);
    }
    getCrises() { return this.crises$; }
    getCrisis(id) {
        return this.getCrises().pipe(map(crises => crises.find(crisis => crisis.id === +id)));
    }
    addCrisis(name) {
        name = name.trim();
        if (name) {
            let crisis = { id: SelectPracticeService_1.nextCrisisId++, name };
            PRACTICES.push(crisis);
            this.crises$.next(PRACTICES);
        }
    }
};
SelectPracticeService.nextCrisisId = 100;
SelectPracticeService = SelectPracticeService_1 = tslib_1.__decorate([
    Injectable({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [MessageService])
], SelectPracticeService);
export { SelectPracticeService };
//# sourceMappingURL=select-practice.service.js.map
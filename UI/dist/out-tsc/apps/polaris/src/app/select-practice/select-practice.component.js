import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectPracticeService } from './select-practice.service';
import { switchMap } from 'rxjs/operators';
let SelectPracticeComponent = class SelectPracticeComponent {
    constructor(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.searchText = '';
    }
    ngOnInit() {
        this.selectedId = 2;
        this.route.paramMap.pipe(switchMap(params => {
            this.selectedId = +params.get('id');
            return this.service.getCrises();
        })).subscribe((location) => {
            this.practices = this.filterPractices = location;
        });
    }
    onSelect() {
        this.router.navigate(['/home']);
    }
    searchPractices(searchText) {
        this.practices = this.filterPractices;
        if (searchText) {
            this.practices = this.practices.filter(practice => practice.name.toLowerCase().includes(searchText.toLowerCase()));
        }
    }
};
SelectPracticeComponent = tslib_1.__decorate([
    Component({
        selector: 'pol-new-select-practice',
        templateUrl: './select-practice.component.html',
        styleUrls: ['./select-practice.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [SelectPracticeService,
        ActivatedRoute,
        Router])
], SelectPracticeComponent);
export { SelectPracticeComponent };
//# sourceMappingURL=select-practice.component.js.map
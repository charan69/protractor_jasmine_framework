export var PatientSearchActionTypes;
(function (PatientSearchActionTypes) {
    PatientSearchActionTypes["PATIENTS_SEARCH"] = "[Patient Search] Patients Search";
    PatientSearchActionTypes["PATIENTS_SEARCH_SUCCESS"] = "[Patient Search] Patients Search Success";
})(PatientSearchActionTypes || (PatientSearchActionTypes = {}));
export class PatientSearchLoadAction {
    constructor(payload) {
        this.payload = payload;
        this.type = PatientSearchActionTypes.PATIENTS_SEARCH;
    }
}
export class PatientSearchLoadSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = PatientSearchActionTypes.PATIENTS_SEARCH_SUCCESS;
    }
}
//# sourceMappingURL=patients-search.actions.js.map
export var CareTeamsActionTypes;
(function (CareTeamsActionTypes) {
    CareTeamsActionTypes["LOAD_CARETEAMS"] = "[CareTeams] Load CareTeams";
    CareTeamsActionTypes["LOAD_CARETEAMS_SUCCESS"] = "[CareTeams] Load CareTeams Success";
})(CareTeamsActionTypes || (CareTeamsActionTypes = {}));
export class CareTeamsLoadAction {
    constructor(payload) {
        this.payload = payload;
        this.type = CareTeamsActionTypes.LOAD_CARETEAMS;
    }
}
export class CareTeamsLoadSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = CareTeamsActionTypes.LOAD_CARETEAMS_SUCCESS;
    }
}
//# sourceMappingURL=care-team.actions.js.map
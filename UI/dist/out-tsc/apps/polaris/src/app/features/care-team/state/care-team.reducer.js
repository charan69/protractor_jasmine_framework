import { CareTeamsActionTypes } from './care-team.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const defaultState = {
    patientCareTeams: [],
    patientNotes: []
};
export function careTeamReducer(state = defaultState, action) {
    switch (action.type) {
        case CareTeamsActionTypes.LOAD_CARETEAMS: {
            return Object.assign({}, state);
        }
        case CareTeamsActionTypes.LOAD_CARETEAMS_SUCCESS: {
            return Object.assign({}, state, { patientCareTeams: action.payload.patientCareTeams, patientNotes: action.payload.patientNotes });
        }
        default: {
            return state;
        }
    }
}
export const careTeam = 'careTeamReducer';
export var CareTeamsLinksQuery;
(function (CareTeamsLinksQuery) {
    CareTeamsLinksQuery.getCareTeamState = createFeatureSelector(careTeam);
    CareTeamsLinksQuery.getCareTeam = createSelector(CareTeamsLinksQuery.getCareTeamState, (state) => {
        return state;
    });
})(CareTeamsLinksQuery || (CareTeamsLinksQuery = {}));
//# sourceMappingURL=care-team.reducer.js.map
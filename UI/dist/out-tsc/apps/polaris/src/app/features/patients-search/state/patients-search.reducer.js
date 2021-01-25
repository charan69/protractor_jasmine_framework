import { PatientSearchActionTypes } from './patients-search.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const defaultState = {
    batchSize: undefined,
    items: [],
    nextSeed: '',
    previousSeed: '',
};
export function patientSearchReducer(state = defaultState, action) {
    switch (action.type) {
        case PatientSearchActionTypes.PATIENTS_SEARCH: {
            return Object.assign({}, state);
        }
        case PatientSearchActionTypes.PATIENTS_SEARCH_SUCCESS: {
            return Object.assign({}, state, { batchSize: action.payload.batchSize, items: action.payload.items, nextSeed: action.payload.nextSeed, previousSeed: action.payload.previousSeed });
        }
        default: {
            return state;
        }
    }
}
export const patientSearch = 'patientSearchReducer';
export var PatientSearchLinksQuery;
(function (PatientSearchLinksQuery) {
    PatientSearchLinksQuery.getPatientSearchState = createFeatureSelector(patientSearch);
    PatientSearchLinksQuery.getPatients = createSelector(PatientSearchLinksQuery.getPatientSearchState, (state) => {
        return state;
    });
})(PatientSearchLinksQuery || (PatientSearchLinksQuery = {}));
//# sourceMappingURL=patients-search.reducer.js.map
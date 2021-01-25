const baseSuites = {
    stickyNotes: './**/src/specs/stickyNotes/stickynotes.spec.ts',
    nonStickyNotes: './**/src/specs/stickyNotes/nonStickyNotes.spec.ts',
    careTeamWidget: './**/src/specs/careTeam/widget.spec.ts',
    dbscripts: './**/src/specs/database.spec.ts',
    all: './**/src/specs/stickynotes/*.spec.ts',
};
const suitesArray = [
    baseSuites,
];
export const suites = function () {
    function extend(obj, src) {
        for (const key in src) {
            if (src.hasOwnProperty(key))
                obj[key] = src[key];
        }
        return obj;
    }
    let suitesObj = {};
    suitesArray.forEach((suite) => {
        suitesObj = extend(suitesObj, suite);
    });
    return suitesObj;
}();
//# sourceMappingURL=suites.js.map
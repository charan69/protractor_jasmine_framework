const baseSuites = {
    tickyNotes: './**/src/specs/tickyNotes/tickynotes.spec.ts',
    nontickyNotes: './**/src/specs/tickyNotes/nontickyNotes.spec.ts',
    areTeamWidget: './**/src/specs/Team/widget.spec.ts',
    dbscripts: './**/src/specs/database.spec.ts',
    all: './**/src/specs/tickynotes/*.spec.ts',
};
const suitesArray = [
    baseSuites,
];


export const suites = function () {

    function extend(obj, src) {
        for (const key in src) {
            if (src.hasOwnProperty(key)) obj[key] = src[key];
        }
        return obj;
    }

    let suitesObj = {};

    suitesArray.forEach((suite) => {
        suitesObj = extend(suitesObj, suite);
    });

    return suitesObj;
}();

import * as tslib_1 from "tslib";
import { DbParams } from '../../config/params/';
import { Helpers } from '../utils/Helpers';
describe('Validate DB', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const dbparams = new DbParams();
    const pg = require('pg');
    const username = dbparams.parameters.postgreUserName;
    const password = dbparams.parameters.postgrePassword;
    const server = dbparams.parameters.postgreServer;
    const port = dbparams.parameters.postgrePort;
    const dbname = dbparams.parameters.postgreDatabaseName;
    // const connectionString = "postgres://postgres:Emids123@localhost:5432/Polaris_POC";
    const connectionString = 'postgres://' + username + ':' + password + '@' + server + ':' + port + '/' + dbname;
    const pgClient = new pg.Client(connectionString);
    let value;
    let randomText;
    let result;
    console.log(connectionString);
    beforeAll(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
        randomText = 'Test body' + Helpers.randomString(5, 'numerals');
    }));
    afterAll(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield pgClient.end();
    }));
    it('Verify if the user is able to query from the tables', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield pgClient.connect();
        yield pgClient.query('INSERT INTO public.patientnote(practiceid, patientid, class, body, time_stamp, lastuser, createstamp, createuser) VALUES (6, 105, \'STICKY\', \' ' + randomText + '\', \'2016-07-28\', 10, \'2015-02-11\', 11)');
        result = yield pgClient.query('select * from patientnote order by note_sid desc');
        value = result.rows[0].body;
        // To remove Whitespaces
        value = value.toString().trim();
        console.log('value from DB is ' + value);
        expect(value).toBe(randomText);
    }));
}));
//# sourceMappingURL=database.spec.js.map
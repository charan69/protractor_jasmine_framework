import 'jasmine';
import { MSParams } from '../../config/params';

const msparams = new MSParams();
export class StickyNoteAPI {
    public static async postSticky(patientId: string, body: string): Promise<string>
    {
      const request = require('superagent');
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
      const url = msparams.parameters.url + `/patients/${patientId}/sticky-notes/post`;
      const res = await request.post(url).send(body);
      return res;
    }
    public static async getSticky(patientId: string): Promise<string>
    {
      const request = require('superagent');
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
      const url = msparams.parameters.url + `/patients/${patientId}/sticky-notes`;
      const res = await request.get(url);
      return res;
    }
}


import * as express from 'express';

import Application from '../application';
import Route from '../common/route.interface';

export class VidlyRoute implements Route {

  constructor() {
    Application.instance.route('/v1/vidly', this);
  }

  public add(): express.Router {
    let router = express.Router();

    //--------------------------------------------------------------------------
    router.get('/', (req: express.Request, res: express.Response) => {

      res.json({success: true, data: {status: "typescript-nodejs-start is ok"}});
    });
    //--------------------------------------------------------------------------

    return router;    
  }
}

export default new VidlyRoute();

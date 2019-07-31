import * as logger from 'logger';
import * as express from 'express';
import * as utils from '../../../../utils/utils';

import { CommonContextType } from '../../../../common/common-types';
import Server from '../../../../express/server';
import Service from '../../../../express/route.interface';
import Application from '../../../application';

export class SanityRoute implements Service {

  constructor() {
    Server.instance.route('/v1/sanity', this);
  }

  public add(): express.Router {
    // route: sanity ------------------------------------------------------------
    let router = express.Router();

    router.get('/', (_, res, __) => {
      res.json({success: true, data: {message: 'reports-service is up and running ..'}});
    });

    router.get('/reports', (req: express.Request, res: express.Response) => {
      utils.context.runInContext(Application.instance.reports().send, {} as CommonContextType, {tenantId: req.query['tenantId'], source: 'sanity-route'});
      res.json({success: true, data: {message: 'start running report process'}});
    });

    router.post('/reports', (req: express.Request, res: express.Response) => {
      utils.context.runInContext(Application.instance.reports().send, {} as CommonContextType, {tenantId: req.query['tenantId'], source: 'sanity-route'});
      res.json({success: true, data: {message: 'start running report process'}});
    });

    return router;
  // --------------------------------------------------------------------------
  }

}


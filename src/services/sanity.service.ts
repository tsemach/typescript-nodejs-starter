import * as express from 'express';
import { Application } from '../application/application';

export class SanityService {

  constructor() {
    Application.instance.register('/', this);
  }

  public add(): express.Router {
    // route: more --------------------------------------------------------------
      let router = express.Router();
    
    router.get('/', (req, res, next) => {
      console.log("got request");
        res.json({
          message: 'sanity is ok'
        });
    });

    router.post('/save', function (req, res) {
      console.log('angular: POST got call from client post ' + req)                
      console.log('angular: POST data received was: ' + JSON.stringify(req.body));
          
      // set the appropriate HTTP header
      res.setHeader('Content-Type', 'application/json');
          
      res.json({
        "status": "ok"
      });
    })
    
    return router;
  // --------------------------------------------------------------------------
  }
}

export default new SanityService();
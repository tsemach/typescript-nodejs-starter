import * as express from 'express';
import Application from '../application/application';
import ServiceType from '../application/service.type';

export class BackendService implements ServiceType {

  constructor(config: {
    service: string
  }) {
    Application.instance.register(config.service, this, config);
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

export default BackendService;
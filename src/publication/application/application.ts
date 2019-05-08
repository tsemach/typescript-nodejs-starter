import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import ServiceType from './service.type';
import ServiceConfigType from './service-config.type';

class Application {  
  private static _instance: Application = null;
  public express: express.Application;
  
  constructor() { 
    console.log("Application:construcot: is called")
    this.express = express();
    this.middleware();    
  }

  public static get instance() {                                          
    return this._instance || (this._instance = new this());
  }                                                                          

  // configure express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(cors());
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({extended: false}));
  }

  /**
   * 
   * @param where - thed of which the service is route (regular express path)
   * @param service - a class which implement this route
   */
  register(where: string, service: ServiceType, config: ServiceConfigType) {
    console.log("going to add " + where);
    this.express.use(where, service.add());
  }

  listen(host: string, port: number) {
    this.express.listen(port, () => {
      // success callback
      console.log(`Listening at http://${host}:${port}/`);
    });
  }
}

export default Application;

//export default // let application = new Application();

// const port: number = 3000;

// application.express.listen(port, () => {
//     // success callback;
//     console.log(`Listening at http://localhost:${port}/`);
// });


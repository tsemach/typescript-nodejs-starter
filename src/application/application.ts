import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as helmet from 'helmet';

import { logger as _logger, Colors } from '../utils';
const logger = _logger.config(Colors.cyan);

import Route from '../common/route.interface';
import Middleware from '../common/middleware.interface';

export default class Application {
  private static _instance: Application = new Application();

  public express: express.Application;
  
  private constructor() { 
    this.express = express();    
  }

  public static get instance() {
    return Application._instance || (Application._instance = new Application());    
  }
  
  public init(middlewares: Middleware[]): void {
    this.use(helmet());
    middlewares.forEach(m => {
      this.use(m);  
    });
    this.use(cors());
    this.use(bodyParser.json());
    this.use(bodyParser.urlencoded({extended: false}));
  }

  use(middleware: any) {
    this.express.use(middleware);
  }

  middleware(where: string, middleware: Middleware) {
    logger.info("going to add middleware at: " + where);
    this.express.use(where, middleware.add(this.express));
  }

  /**
   * Services are all to add their routes into express application
   *    
   * @param where - thed of which the service is route (regular express path)
   * @param service - a class which implement this route
   */
  route(where: string, service: Route) {
    logger.info("going to add service at: " + where);
    this.express.use(where, service.add(this.express));
  }

  listen(port: number) {
    this.express.listen(port, () => {
      // success callback
      console.log(`Listening at http://localhost:${port}/`);
    });
  }
}

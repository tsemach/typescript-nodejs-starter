import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

export const Application  = new class {  

  public express: express.Application;

  // run configuration methods on the express instance.
  constructor() { 
    console.log("Application:construcot: is called")
    this.express = express();
    this.middleware();    
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
  register(where, service) {
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

//export default // let application = new Application();

// const port: number = 3000;

// application.express.listen(port, () => {
//     // success callback;
//     console.log(`Listening at http://localhost:${port}/`);
// });


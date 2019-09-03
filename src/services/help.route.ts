import _logger from '../utils/logger';
import Colors from '../utils/color';
const logger = _logger.config();

import * as express from 'express';

import Application from '../application/application';
import Service from '../common/route.interface';
import Config from '../config';

export class HelpRoute implements Service {

  constructor() {
    Application.instance.route('/v1/help', this);
  }

  public add(): express.Router {
    // route: help ------------------------------------------------------------
    let router = express.Router();

    router.get('/', (_, res, __) => {
      logger.info("GET:/v1/help got server request");
      const help = `
        [
          family: ${Colors.magenta}genra${Colors.reset}
          description: get all genras
          command: ${Colors.green}GET${Colors.reset}:${Colors.yellow}/v1/vidly/genres${Colors.reset}
          example: ${Colors.cyan}curl http://localhost:${Config.port}/v1/vidly/genres${Colors.reset}
        ]
`
      res.send(help)      
    });
    
    return router;
  // --------------------------------------------------------------------------
  }

}

export default new HelpRoute();

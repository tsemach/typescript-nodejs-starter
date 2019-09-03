
import { logger as _logger, Colors } from './utils';
const logger = _logger.config(Colors.yellow);

import Config from './config'

process.on('unhandledRejection', (error: Error) => {
  logger.error(`unhandledRejection: ${error}\nstack: ${error.stack}`);
});

import Application from './application';
import './services';

Application.instance;

const port = Config.port;
Application.instance.listen(+port);

import * as dotenv from 'dotenv';
dotenv.config();

import Application from './application/application';
import { BackendService } from './services';

new BackendService({service: '/backend'});

const port = process.env.PORT || 3100;

Application.instance.listen('localhost', +port);
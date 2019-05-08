import { Application } from './application/application';
import * as dotenv from 'dotenv';

dotenv.config();

require('./services/');

const port = process.env.PORT || 3100;
Application.listen('localhost', +port);
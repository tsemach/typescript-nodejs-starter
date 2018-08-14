import { Application } from './application';
import * as dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3000;

Application.instance.listen('localhost', +port);
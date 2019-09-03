import * as express from 'express';

export default interface Route {
  add(express: express.Application): express.Router;
}

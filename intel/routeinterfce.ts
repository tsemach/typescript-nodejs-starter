import * as express from 'express';

export default interface Route {
  add(express: any): express.Router;
}

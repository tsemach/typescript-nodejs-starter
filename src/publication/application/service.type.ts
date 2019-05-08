import * as express from 'express';

export default interface ServiceType {
  add(): express.Router;
}
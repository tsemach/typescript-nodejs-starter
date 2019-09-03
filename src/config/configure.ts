
import vidly from './vidly';

const { NODE_ENV = 'development' } = process.env;

class Configure {
  private _basedir = `${__dirname}/../..`

  constructor() {
  }

  get basedir() {
    return this._basedir;
  }

  set basedir(_basedir) {
    this._basedir = _basedir;
  }

  get port() {
    return process.env.PORT || 3000;
  }

  isProduction() { 
    return NODE_ENV === 'production';     
  }

  vidly() {
    return vidly[NODE_ENV];
  }

}

export default new Configure();
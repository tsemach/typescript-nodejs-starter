
import Colors from './color';
import Configure from '../config/configure';

const _logger = {
  info: (...args: any[]) => console.log(...args)  
};


const vidlyLogger = {
  ..._logger,  
  info(msg: string[]) {
    if ( this.isColor && ! Configure.isProduction()) {      
      _logger.info(`${this.color}${msg}${Colors.reset}`);

      return;
    }
    
    _logger.info(msg);
  },
  
  isColor: false,
  color: Colors.reset,

  coloring: (logger: any, color: string) => {
    logger.isColor = true;
    logger.color = color;

    return logger;
  },
}

export default {  
  config: (color?: string) => {    
    const logger = {
      ...vidlyLogger
    }
    if ( ! color ) {
      return logger;
    }
    return logger.coloring(logger, color);
  } 
}

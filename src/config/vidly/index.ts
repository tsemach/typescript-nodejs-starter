import vidlyConfig from './vidly.config';

const common = {
};

export default {
  development: {    
    ...vidlyConfig.development,
    ...common
  },
  test: {    
    ...vidlyConfig.test,
    ...common
  },
  production: {
    ...vidlyConfig.production,
    ...common
  },    
};

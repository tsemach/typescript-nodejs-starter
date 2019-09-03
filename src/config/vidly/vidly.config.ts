export default {
  development: {
    VIDLY_URL:                    process.env.DEV_VIDLY_URL,
  },
  test: {
    VIDLY_URL:                    process.env.STG_VIDLY_URL,
  },
  production: {
    VIDLY_URL:                    process.env.PRD_VIDLY_URL,
  },
};




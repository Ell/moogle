'use strict';

const environment = process.env.NODE_ENV || 'production';

const isDev = environment !== 'production';

export default isDev;

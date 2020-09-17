const winston = require('winston');
// require('winston-mongodb');
require('express-async-errors');

module.exports = function () {
    winston.handleExceptions(
        new winston.transports.Console({colorize:true, prettyPrint: true}),
        new winston.transports.File({ filename: 'uncaughtExceptions.log'})
      );
      
      process.on('unhandledRejection', (ex) => {
        throw ex;
      });
      
      /*process.on('unhandledRejection', (ex) => {
        winston.error(ex.message, ex);
        process.exit(1);
      });
      
      /* winston.handleExceptions(
        new winston.transports.File({ filename: 'uncaughtExceptions.log'}));
      
      process.on('unhandledRejection', (ex) => {
        throw ex;
      }); */
      
      winston.add(winston.transports.File, { filename: 'logfile.log' });
      // winston.add(winston.transports.MongoDB, { 
      //   db: 'mongodb://127.0.0.1/vidly',
      //   level: 'info',
      //   tryReconnect: true
      //   // error, warn and info will be logged (error level)
      // });
      
      /*const p = Promise.reject(new Error ('Something failed!!!'));
      p.then(() => console.log('Done'));*/
}
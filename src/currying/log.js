const _ = require('lodash');

function log(date, importance, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

log = _.curry(log);

log(new Date(), 'DEBUG', 'some debug');
log(new Date())('DEBUG')('some debug');

const logNow = log(new Date());
logNow('INFO', 'message');

const debugNow = logNow('DEBUG');
debugNow('message');

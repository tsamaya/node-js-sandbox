var Imp1 = require('./Imp1');
var Imp2 = require('./Imp2');

function Adapter(key, options) {
  'use strict';
  if( !options) {
    options = {};
  }
  //console.log(options);
  this.version = options.version || '1.0';
  this.name = key || '(A)default';

  if(this.version === '2.0' ) {
    this.impl = new Imp2(options);
    console.log('named B created');
  } else {
    this.impl = new Imp1(options);
    console.log('named A created');
  }
}

module.exports = Adapter;

Adapter.prototype.methodName = function () {
  'use strict';
  return this.impl.methodName();
};

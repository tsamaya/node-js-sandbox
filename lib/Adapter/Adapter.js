var Imp1 = require('./Imp1');
var Imp2 = require('./Imp2');

function Adapter(options) {
  'use strict';
  if( !options) {
    options = {};
  }
  //console.log(options);
  this.version = options || 'A';

  if(this.version === 'B' ) {
    console.log('version B');
    this.impl = new Imp2();
  } else {
    console.log('version A');
    this.impl = new Imp1();
  }
}

module.exports = Adapter;

Adapter.prototype.methodName = function () {
  'use strict';
  return this.impl.methodName();
};

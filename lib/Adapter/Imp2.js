var Base = require('./Base');

function Imp2(options){
  Base.call(this, options);
}

Imp2.prototype = Object.create(Base.prototype);

Imp2.prototype.methodName = function () {
  'use strict';
  return Base._execute.call(this, 'Imp2');
};

module.exports = Imp2;

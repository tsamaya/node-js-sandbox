var Base = require('./Base');

function Imp1(){}

Imp1.prototype = Object.create(Base);

Imp1.prototype.methodName = function () {
  'use strict';
  return Base._execute.call(this, 'Imp1');
};

module.exports = Imp1;

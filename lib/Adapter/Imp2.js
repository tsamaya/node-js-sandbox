var Base = require('./Base');

function Imp2(){}

Imp2.prototype = Object.create(Base);

Imp2.prototype.methodName = function () {
  'use strict';
  return Base._execute.call(this, 'Imp2');
};

module.exports = Imp2;

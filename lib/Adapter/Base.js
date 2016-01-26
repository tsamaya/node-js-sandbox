function Base(options) {
  if (!options) {
    options = {};
  }
  this.version = options.version || 'default';
}

module.exports = Base;

Base.prototype.methodName = function() {
  'use strict';
  return 'not yet implemented';
};

Base._execute = function(value) {
  'use strict';
  return 'version ' + this.version + ' is ' + value;
};

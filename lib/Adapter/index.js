var Imp1 = require('./Imp1');
var Imp2 = require('./Imp2');

var test1 = new Imp1();
console.log('test 1 returns ' +test1.methodName());

var test2 = new Imp2();
console.log('test 2 returns ' +test2.methodName());


var Adapter = require('./Adapter');

var adap = null;

adap = new Adapter('A');
console.log('adap(A) returns ' +adap.methodName());

adap = new Adapter('B', {version: '1.0'});
console.log('adap(B) returns ' +adap.methodName());

adap = new Adapter('C', {version: '2.0'});
console.log('adap(C) returns ' +adap.methodName());

adap = new Adapter('C', {version: '4.0'});
console.log('adap(C) returns ' +adap.methodName());

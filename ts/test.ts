import {hello} from './main';

QUnit.test('hello function', function(assert){
    let rtVal = hello();
    assert.equal(rtVal, "Hello World!");
});
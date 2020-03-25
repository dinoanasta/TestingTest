const add = require('./add')

test('adds 1 + 2 to equal 3', additionTest);

function additionTest(){
	expect(add(1,2)).toBe(3);
}

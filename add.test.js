const add = require('./add')

test('adds 1 + 2 + 3 to equal 6', additionTest);

function additionTest(){
	expect(add(1,2,3)).toBe(6);
}

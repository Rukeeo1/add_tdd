const addObj = require('./add');

//adding my first test...
describe('Add Two Numbers', function(){
    it('should return a value', function(){
        expect(addObj.add(2,2)).toBeDefined()
    });
});


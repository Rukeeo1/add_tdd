const addObj = require('./add');

//adding my first test...
describe('Add Two Numbers', function(){
    //my function has to return something...
    it('should return a value', function(){
        expect(addObj.add(2,2)).toBeDefined()
    });

    it('should have a numbers a it\'s parameters', function(){
        expect(addObj.add('2',2)).toBe('first and second parameter\'s must be numbers')
    });
    
});





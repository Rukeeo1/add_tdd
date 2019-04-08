const addObj = require('./add');

//adding my first test...
describe('Add Two Numbers', function(){
    //my function has to return something...
    it('should return a value', function(){
        expect(addObj.add(2,2)).toBeDefined()
        expect(addObj.add()).toBeDefined()
    });

    it('should have a numbers a it\'s parameters', function(){
        expect(addObj.add('2',2)).toBe('first and second parameter\'s must be numbers');
        expect(addObj.add(2,null)).toBe('first and second parameter\'s must be numbers');
    });

    it('should work for floating point numbers', function(){
        expect(addObj.add(0.2,0.4)).toBe(0.6);
    });


});





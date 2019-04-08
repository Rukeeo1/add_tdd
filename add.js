const myAddObj = {
    add:function(a,b){
        //lessons learnt. to check for if both are numbers...use 'or' and not &&.
        if(typeof a !== 'number' || typeof b !== 'number'){
            return 'first and second parameter\'s must be numbers'
        }
        let ans = a + b;
        if(Number.isInteger(ans)){
            return ans;
        }else{
            return Number(ans.toFixed(2));
        }
        //return a + b;
    }
};
console.log(myAddObj.add(0.2,0.3));
module.exports = myAddObj;
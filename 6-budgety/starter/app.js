var budgetController = (function () {
    // a IIFE that keeps the code protects 
    // all this code is protected inside this IIFE and if we want any 
    // data to reach outside for access for other function we can 

    var x = 23;

    var add = function (a) {
        return x + a;
    }
    // so once the IIFE is called it returns this function and this function can be 
    // access from the outside. protects the data up top like and the add function;

    return {
        publicTest: function (b) {
            return (add(b));
        }
    }
})();
//with IIFE we can create separation of code which is called separation of concerns
// Now the code is independent of each other and can be changed in the future if we want 
//change any specific part of the whole app we can 

var UIController = (function () {
    // Some code 
})();

// this function controller the two controller so they pass there data through to each other 
var controller = (function (budgetCtrl, UICtrl) {

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function () {
            console.log(z);
        }

    }

})(budgetController, UIController);
// Constants vs Let Declarations
function constantsVsLetDeclarations() {
    let condition = true;
    const count = 30;
    // Does not throw an error
    if (condition) {
        const count = 40;

        // more code
    }
}


// Declaring Objects with const
// Prevents modification of binding but not of the value itself (Just like Java! :>)
const person = {
    name: "Nicholas"
};
// works
person.name = "Greg";

// throws an error
// person = {
//     name: "Greg"
// };

var funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push((function (value) {
        return function () {
            console.log(value);
        }
    }(i)));
}

// Let simplifies without need of IIFE
for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    });
}

funcs.forEach(function (func) {
    func(); // outputs 0, then 1, then 2, up to 9
});

// "When used in a for-in or for-of loop, on the other hand, a const variable behaves the same as a let variable."
var funcs2 = [], object = {
    a: true, b: true, c: true
};
// doesn't cause an error
for (const key in object) {
    funcs2.push(function () {
        console.log(key);
    });
}



### Object Subset
#
# (objsub)



an easy way to clone specified object properties into a new returned object.


(useful in minimizing IO)

#
### example:
``` javascript
const subs = require('objsub');
//
// API: (object, arrayOfKeys)
//
var obj = {
    asdfas: 5,
    foo: 'bar'
}

console.log(subs(obj, ['foo'])); // returns { foo: 'bar' }
//
//

var cachedObj = subs(obj, ['foo']);

obj.asdfas = 100;
obj.foo = 'panda';

console.log(cachedObj); // returns { foo: 'bar' } // not panda
//
//

var obj2 = {
    number: 65,
    pants: 'green',
    monkey: 'Colobus',
}

console.log(subs(obj2, ['pants', 'number'])); // returns { pants: 'green', number: 65 }
```
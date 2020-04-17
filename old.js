// const subs = (obj, props)=>{
//     let newobj = {};
//     let c = 0;
//     props.forEach(()=>{
//         newobj[props[c]] = obj[props[c]];
//         c++;
//     });
//     return newobj
// };

const subs = (d,a)=>{let c = {},b = 0;a.forEach(()=>{c[a[b]] = d[a[b]];b++});return c};


var obj = {
    asdfas: 5,
    foo: 'bar'
}


console.log(subs(obj, ['foo']));


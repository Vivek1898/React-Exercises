const first=[1,2,3];
const second=[4,5,6];

const combine=first.concat(second);
//WITH SPREAD OPERATOR
// "   ...   "  --->3 dots
//Add new item
const comb=[...first, 'a',...second ,'b']

//Cloning
const clone=[...first];
console.log(first);
console.log(clone);
// o/p-[ 1, 2, 3 ]
//   [ 1, 2, 3 ]

//With objects
const a={name:"Vivek"};
const b={lastname:"Singh"};
const combined={...a, ...b,location:"India"};
console.log(combined);

//{ name: 'Vivek', lastname: 'Singh', location: 'India'}
const clone2={...first};
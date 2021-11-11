const colors=['red','green','blue'];
//Map Method
//call back function loops and take ithem
// and return new item
//Returns new array

// const item=colors.map(function(color){
//     return '<li>'+color+ '</li>';
// });

const item=colors.map((color) => '<li>'+color+ '</li>');

//paketic character-->template for string
//Tempalte literal
//find color dynamically

const items=colors.map(color=>`<li> ${color}</li>`)
console.log(items)

// output- [ '<li> red</li>', '<li> green</li>', '<li> blue</li>' ]
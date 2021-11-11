const person={
    name:'Vivek',
    //Walk is A Method in Person object 
    walk(){},
    talk()
};

person.talk();
person.talk['name']='john';

//dynamically process data into objectt
const target='name';
//let say input fieldd

person[target.value]='john';
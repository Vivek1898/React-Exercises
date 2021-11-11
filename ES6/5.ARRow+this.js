const person1={
    talk(){
        console.log("this",this)//a person object
        setTimeout(function(){
            console.log("this",this)//a window object
        },1000);
       
    }
}


//how can we solve

const person2={
    talk(){
        var self=this;
        console.log("this",this)//a person object
        setTimeout(function(){
            console.log("self",self)//a person object
        },1000);
       
    }
}

//With arrow fuctions
//so it inherit this 

const person={
    talk(){
        var self=this;
        console.log("this",this)//a person object
        setTimeout(()=>{
            console.log("this",this)//a person object
        },1000);
       
    }
}
person.talk();
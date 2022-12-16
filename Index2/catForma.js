function CheckAll(){
class Cat{
    constructor(name, namePet, number, email){
this.name = name;
this.namePet = namePet;
this.number = number;
this.email = email;
    }
    
}

let cat = new Cat(document.getElementById('name_owner').value, document.getElementById('name_pet').value, 
document.getElementById('number').value, document.getElementById('email').value);

console.log(cat);
}

document.querySelector('.button').addEventListener('click', CheckAll);



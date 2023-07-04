class Vehicle{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    describeCar(){
        console.log(`This is a ${this.name} ${this.type}`);
    }
}

let car = new Vehicle("Honda","Civic");
car.describeCar();


class Suv extends Vehicle{
    constructor(){
        //super() calls the constructor of the parent class
        super("Honda","CRV");       
    }
}

let suv = new Suv();
suv.describeCar();
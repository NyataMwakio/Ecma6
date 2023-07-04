let attendance={
    _list:[],
    set addName(name){
        this._list.push(name);
    },

    get list(){
        return this._list.join(", ");
    }

}
attendance.addName="Miro";
attendance.addName="Joanna";
attendance.addName="Josh";

console.log(attendance.list);

class Person{
    constructor(name){
        this.name=name;
    }
    get name(){
        return this._name.toUpperCase();
    }
    set name(newName){
        if(newName){
            this._name=newName;
        }
    }
}

let person=new Person("Miro");
console.log(person.name);
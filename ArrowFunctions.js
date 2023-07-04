let studentList=function(students){
    console.log(students);
}
studentList(["Miro","Joanna","Josh"]);

let studentList2=(students)=>{
    console.log(students);
}
studentList2(["Miro","Joanna","Josh"]);

let studentList3=[{name:"Miro",age:30},{name:"Joanna",age:29},{name:"Josh",age:31}];
studentList3.map((student)=>{
    console.log(student.name + " is " + student.age + " years old.");
});

let person={
    name:"Miro",
    hobbies:["coding","skiing","hiking"],
    printHobbies: function(){
       let _this=this;
        this.hobbies.forEach(function(hobby){
            let sentence=`${_this.name} likes to do the following ${hobby}`;
            console.log(sentence);
        });
    }
}
person.printHobbies();

//using arrow functions
let person2={
    name:"Miro",
    hobbies:["coding","skiing","hiking"],
    printHobbies: function(){
        this.hobbies.forEach((hobby)=>{
            let sentence=`${this.name} likes to do the following ${hobby}`;
            console.log(sentence);
        });
    }
}
person2.printHobbies();
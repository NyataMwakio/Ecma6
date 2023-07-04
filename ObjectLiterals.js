function skier(name, sound){
    return{
        name,
        sound,
        powderYell: function(){
            let yell = this.sound.toUpperCase();
            console.log(`${yell} ${yell} ${yell}!!!`);
        }
    }
}

console.log(skier("Miro","woof").name);
console.log(skier("Miro","woof").sound);
console.log(skier("Miro","woof").powderYell());

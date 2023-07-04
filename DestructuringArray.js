let cities=["Barcelona","Madrid","Valencia","Sevilla","Zaragoza"];
//array destructuring by getting the first two elements
let [first,second]=cities;
console.log(first,second);
//get the first and the third element
let [first1,,third]=cities;
console.log(first1,third);

function getCities([first,second]){
    console.log(first,second);
}
getCities(cities);
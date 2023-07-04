//loop over a string
for (let char of "Hello") {
    console.log(char);
}
//loop over an array
let topics = ["JavaScript", "Node", "React"];
for (let topic of topics) {
    console.log(topic);
}
//map
let topicsMap = new Map();
topicsMap.set("HTML", "/class/html");
topicsMap.set("CSS", "/class/css");
topicsMap.set("JavaScript", "/class/javascript");
for (let topic of topicsMap.keys()) {
    console.log(topic);
}
for (let topic of topicsMap.values()) {
    console.log(topic);
}

//the entries method returns an iterator that contains the key/value pairs
for (let topic of topicsMap.entries()) {
    console.log(topic);
}
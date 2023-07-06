const delay=(seconds)=>{
    return new Promise((resolve,reject)=>{
        if(typeof seconds!=='number'){
            reject("seconds must be a number")
        }
        else{
           setTimeout(resolve,1000*seconds)
        }
    });
}

const countToThree=async()=>{
    await delay(1);
    console.log("One second");
    await delay(2);
    console.log("two seconds");
    await delay(3);
    console.log("Three seconds");
    
}

countToThree();
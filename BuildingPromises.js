const delay=(seconds)=>new Promise((resolve, reject)=>{
    //check if seconds is a number
    if(typeof seconds !== 'number'){
        reject(new Error('Argument seconds must be a number'));
    }
    else if(typeof seconds==="undefined"){
        reject(new Error('Argument cannot be empty'));
    }
    else{
        setTimeout(resolve,seconds*1000);
    }
  
});
delay(1).then(()=>console.log("1 second"));
delay(3).then(()=>console.log("3 seconds"));
delay(5).then(()=>console.log("5 seconds"));
delay().then(()=>console.log("empty"));
//delay("5").then(()=>console.log("5 seconds"));
//
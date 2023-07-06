const getPeopleInSpace=async()=>{
    let response=await fetch("http://api.open-notify.org/astros.json");
    let data;
    try {
        data=await response.json();
    } catch (error) {
        console.log(error);
    }
    finally{
        if(typeof data==='undefined'){
            console.log("No data returned");
        }else{
            console.log(data.people);
        }
    }

}

getPeopleInSpace();
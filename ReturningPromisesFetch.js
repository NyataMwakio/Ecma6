let getSpacePeople=()=>{
    return new Promise((resolve,reject)=>{
    fetch("http://api.open-notify.org/astros.json")
    .then((data)=>{
        return data.json();
    }).catch((err)=>{
     reject(Error("Error fetching data."+ err));
    }).then((spaceData)=>{
        resolve(spaceData);
    })
})
}

//get the people in space
getSpacePeople().then((spaceData)=>{
    spaceData.people.forEach(prs => {
        console.log(prs.name);
    });
});

let getSpaceStationLocation=()=>{
    return new Promise((resolve,reject)=>{
        fetch("http://api.open-notify.org/iss-now.json")
        .then((data)=>{
            return data.json();
        })
        .then((spaceData)=>{
            resolve(spaceData);
        })
        .catch((err)=>{
            reject("Error getting data: "+ err)
        })
    })
}

getSpaceStationLocation().then((spacedata)=>{
    console.log(spacedata.iss_position);
})
.catch((err)=>{
    console.log(err);
})

//add a remote git
//git remote add origin 
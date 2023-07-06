const getGithubUserProfile=async(username)=>{
     let response=await fetch(`https://api.github.com/users/${username}`);
     let data;
     try {
        data=await response.json();
     } catch (error) {
        console.log(error)
     }
     finally{
        //check if there are objects in the data
        if(typeof data === 'undefined'){
            console.log("No data returned");
        }
        else{
        if(data.message === 'Not Found'){
          console.log("User not found");
        }
        else{
            console.log(`${data.name}\n${data.bio}`);
        }
    }

     }
    
}

getGithubUserProfile("joshmwakio");
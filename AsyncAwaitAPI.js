const getGithubUserProfile = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
  
      if (typeof data === 'undefined') {
        throw new Error('No data returned');
      } else if (data.message === 'Not Found') {
        throw new Error('User not found');
      }
  
      return {
        name: data.name,
        bio: data.bio
      };
    } catch (error) {
      console.log(error);
    }
  };
  
  // Example usage:
  getGithubUserProfile("joshmwakio")
    .then((profile) => {
      console.log(`${profile.name}\n${profile.bio}`);
    })
    .catch((error) => {
      console.log(error);
    });
  
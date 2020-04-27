const api = {
  getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}`;

    // Update response to return user profile picture and email
    return new Promise((resolve, reject) => {
      axios
      .get(queryUrl)
      .then(response => {
        const userData = {
          login: response.data.login,
          avatarUrl: response.data.avatar_url,
          email: response.data.email
        };
        resolve(userData);
      })
      .catch(error => {
        reject(error);
      });
    })
  }
}

module.exports = api;

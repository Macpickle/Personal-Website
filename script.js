const GITHUB_URL = 'https://api.github.com/users/';
const imageTag = document.getElementById('avatar');

getUser("Macpickle")

function getUser(username) {
    fetch(GITHUB_URL + username)
        .then(response => response.json())
        .then(data => {
            imageTag.setAttribute('src', data.avatar_url);
            
            console.log(data);
        })
        .catch(error => console.error('Error:', error));
}
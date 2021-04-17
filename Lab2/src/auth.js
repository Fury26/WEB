const usersStorage = 'users-storage';

class User {
    username;
    email;

    constructor(username, email) {
        this.username = username;
        this.email = email;

        this.usernameSpan = document.querySelector('#username');
        this.usernameSpan.innerHTML = 'Welcome back, ' + this.username;
    }
}

const users = JSON.parse(localStorage.getItem(usersStorage));

const logined = users ? users.filter((user) => user.logined)[0] : null;

let user;

console.log('logined', logined);

if (logined) {
    user = new User(logined.username, logined.email);
} else {
    document.querySelector('#username').innerHTML = 'You haven`t logged yet';
}
